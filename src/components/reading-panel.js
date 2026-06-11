'use client';

import { useEffect, useRef, useState } from 'react';
import { ImageLightbox } from './image-lightbox';
import { isTranslatableParagraph } from '@/lib/paragraph-utils';

export function ReadingPanel({
  article,
  translatedParagraphs,
  highlightedParagraphs,
  noteOpenParagraphs,
  notes,
  onToggleTranslation,
  onToggleHighlight,
  onToggleNote,
  onNoteChange,
}) {
  const contentRef = useRef(null);
  const [lightboxImage, setLightboxImage] = useState(null);

  useEffect(() => {
    const root = contentRef.current;
    if (!root) return undefined;

    const onClick = (event) => {
      const image = event.target.closest('img');
      if (!image || !root.contains(image)) return;
      event.preventDefault();
      setLightboxImage({
        src: image.currentSrc || image.src,
        alt: image.alt || '',
      });
    };

    root.addEventListener('click', onClick);
    return () => root.removeEventListener('click', onClick);
  }, [article?.id, article?.paragraphs?.length]);

  if (!article?.paragraphs?.length) {
    return (
      <div className="coming-soon">
        <div className="icon">📝</div>
        <h3>{article.title}</h3>
        <p>
          这篇文章的学习内容正在准备中。
          <br />
          你可以先阅读原文。
        </p>
        <a className="btn btn-p" href={article.url} rel="noreferrer" style={{ marginTop: 14, display: 'inline-block' }} target="_blank">
          🔗 阅读原文
        </a>
      </div>
    );
  }

  return (
    <>
      <ImageLightbox image={lightboxImage} onClose={() => setLightboxImage(null)} />
      <div className="article-header">
        <h2>{article.title}</h2>
        <div className="article-meta">
          <span>📅 {article.date}</span>
          <span>⭐ {article.diff}</span>
          <span>⏱️ {article.time}</span>
          <span>✍️ {article.author}</span>
          <span>
            <a className="article-link" href={article.url} rel="noreferrer" target="_blank">
              🔗 原文
            </a>
          </span>
        </div>
      </div>

      <div className="reading-content" ref={contentRef}>
      {article.paragraphs.map((paragraph, index) => {
        const translated = translatedParagraphs.has(index);
        const highlighted = highlightedParagraphs.has(index);
        const noteOpen = noteOpenParagraphs.has(index);
        const isHeading = /^<h[2-4][^>]*>/.test(paragraph.en);
        const isFigure = paragraph.kind === 'image' || paragraph.en.startsWith('<figure');
        const translatable = isTranslatableParagraph(paragraph);
        const blockClass = isHeading ? 'paragraph-heading' : isFigure ? 'paragraph-figure' : '';
        return (
          <div className={`paragraph ${blockClass} ${highlighted ? 'highlight' : ''}`} data-id={index} key={index}>
            <div className="para-en" dangerouslySetInnerHTML={{ __html: paragraph.en }} />
            {translatable ? (
              <div className={`para-cn ${translated ? 'show' : ''}`} dangerouslySetInnerHTML={{ __html: paragraph.cn }} />
            ) : null}
            <div className="para-controls">
              {translatable ? (
                <button className={`para-btn btn-tr ${translated ? 'active' : ''}`} type="button" onClick={() => onToggleTranslation(index)}>
                  译
                </button>
              ) : null}
              <button className="para-btn btn-hl" type="button" onClick={() => onToggleHighlight(index)}>
                亮
              </button>
              <button className="para-btn btn-nt" type="button" onClick={() => onToggleNote(index)}>
                记
              </button>
            </div>
            <div className={`note-area ${noteOpen ? 'show' : ''}`}>
              <textarea onChange={(event) => onNoteChange(index, event.target.value)} placeholder="笔记..." value={notes[index] || ''} />
            </div>
          </div>
        );
      })}
      </div>
    </>
  );
}
