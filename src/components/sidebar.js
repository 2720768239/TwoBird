'use client';

import { courseModules } from '@/data/course-modules';

export function Sidebar({ articles, currentArticleId, open, onClose, onSelectArticle, visible }) {
  return (
    <>
      <div className={`sidebar-overlay ${open ? 'show' : ''}`} onClick={onClose} />
      <aside className={`sidebar ${visible ? '' : 'hidden'} ${open ? 'open' : ''}`} id="sidebar">
        <div className="sidebar-header">
          <h3>📚 课程目录</h3>
        </div>
        {courseModules.map((module) => (
          <div key={module.title}>
            <div className="module-title">{module.title}</div>
            {module.articleIds.map((articleId) => {
              const article = articles[articleId];
              return (
                <div
                  className={`art-item ${currentArticleId === articleId ? 'active' : ''}`}
                  key={article.id}
                  onClick={() => onSelectArticle(articleId)}
                >
                  <span>
                    {article.id + 1}. {article.title}
                  </span>
                  <span className={`st ${article.id === 0 ? 'st-ing' : 'st-todo'}`}>
                    {article.id === 0 ? '学习中' : '待学习'}
                  </span>
                </div>
              );
            })}
          </div>
        ))}
      </aside>
    </>
  );
}
