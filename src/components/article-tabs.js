'use client';

const tabs = [
  ['structure', '📋 结构'],
  ['reading', '📖 阅读'],
  ['vocabulary', '📚 词汇'],
  ['sentences', '📝 长难句'],
  ['concepts', '💡 概念'],
  ['quotes', '✨ 金句'],
  ['tasks', '✅ 任务'],
];

export function ArticleTabs({ activeTab, onChange }) {
  return (
    <div className="tab-nav" id="tabNav">
      {tabs.map(([name, label]) => (
        <button className={activeTab === name ? 'active' : ''} key={name} type="button" onClick={() => onChange(name)}>
          {label}
        </button>
      ))}
    </div>
  );
}
