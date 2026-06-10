'use client';

import { useState } from 'react';

export function VocabularyPanel({ article }) {
  const [openWords, setOpenWords] = useState(() => new Set());

  if (!article?.vocab?.length) {
    return (
      <div className="coming-soon">
        <div className="icon">📚</div>
        <h3>准备中</h3>
      </div>
    );
  }

  function toggle(word) {
    setOpenWords((current) => {
      const next = new Set(current);
      if (next.has(word)) next.delete(word);
      else next.add(word);
      return next;
    });
  }

  return (
    <>
      <h3 style={{ color: 'var(--p)', marginBottom: 14 }}>📚 核心词汇表</h3>
      <p style={{ color: 'var(--g)', marginBottom: 14, fontSize: 15 }}>点击查看释义</p>
      <div className="concept-grid">
        {article.vocab.map((word) => {
          const open = openWords.has(word.en);
          return (
            <div className="concept-card" key={word.en} onClick={() => toggle(word.en)}>
              <h4>{word.en}</h4>
              {open ? (
                <div className="m" style={{ marginTop: 6 }}>
                  <p style={{ color: 'var(--a)', fontWeight: 500 }}>{word.cn}</p>
                  <p style={{ fontSize: 13, color: 'var(--g)', marginTop: 3 }}>例：{word.ex}</p>
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    </>
  );
}
