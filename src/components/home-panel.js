'use client';

import { courseModules } from '@/data/course-modules';

export function HomePanel({ articles, onSelectArticle }) {
  return (
    <div className="tab-content active" id="tab-home">
      <div className="home-hero">
        <h2>Claude + 英语双修课程</h2>
        <p>基于 Anthropic 官方博客 · 13 篇精选文章 · 8 周学习计划</p>
      </div>
      <div className="home-body">
        {courseModules.map((module) => (
          <div className="module-card" key={module.title}>
            <h3>
              {module.icon} {module.title}（{module.weeks}）
            </h3>
            <div className="desc">{module.subtitle}</div>
            <ul className="art-list">
              {module.articleIds.map((articleId) => {
                const article = articles[articleId];
                return (
                  <li key={article.id} onClick={() => onSelectArticle(articleId)}>
                    <span className="num">{article.id + 1}</span>
                    {article.title}
                    <span className="diff">{article.diff}</span>
                    {article.id === 0 ? <span className="st-tag st-ing">学习中</span> : null}
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
