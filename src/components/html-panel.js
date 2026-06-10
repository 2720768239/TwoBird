'use client';

export function HtmlPanel({ html, icon, title }) {
  if (!html) {
    return (
      <div className="coming-soon">
        <div className="icon">{icon}</div>
        <h3>{title}</h3>
      </div>
    );
  }

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
