'use client';

import { useEffect, useState } from 'react';

export function VocabBar({ article, showChinese }) {
  const [openWords, setOpenWords] = useState(() => new Set());

  useEffect(() => {
    setOpenWords(new Set());
  }, [article?.id]);

  if (!article?.vocab?.length) return null;

  function toggle(word) {
    setOpenWords((current) => {
      const next = new Set(current);
      if (next.has(word)) next.delete(word);
      else next.add(word);
      return next;
    });
  }

  return (
    <div className="vocab-bar" id="vocabBar">
      {article.vocab.slice(0, 15).map((word) => (
        <span
          className={`vocab-tag ${showChinese || openWords.has(word.en) ? 'show-cn' : ''}`}
          key={word.en}
          onClick={() => toggle(word.en)}
        >
          {word.en}
          <span className="cn">{word.cn}</span>
        </span>
      ))}
    </div>
  );
}
