'use client';

export function TopBar({
  title,
  user,
  isArticleOpen,
  allTranslationsVisible,
  favorite,
  onToggleSidebar,
  onHome,
  onToggleAllTranslations,
  onToggleVocab,
  onToggleFavorite,
  onExportNotes,
  onOpenAuth,
  onLogout,
}) {
  return (
    <div className="top-bar">
      <button className="menu-btn" type="button" onClick={onToggleSidebar}>
        ☰
      </button>
      <h1>{title}</h1>
      <div className="ctrl">
        <button className="btn btn-w" type="button" onClick={onHome}>
          🏠 <span className="btn-text">首页</span>
        </button>
        <button
          className={`btn btn-w ${allTranslationsVisible ? 'active' : ''}`}
          type="button"
          onClick={onToggleAllTranslations}
          disabled={!isArticleOpen}
        >
          🌐 <span className="btn-text">{allTranslationsVisible ? '隐藏' : '翻译'}</span>
        </button>
        <button className="btn btn-w" type="button" onClick={onToggleVocab} disabled={!isArticleOpen}>
          📚 <span className="btn-text">词汇</span>
        </button>
        <button
          className={`btn btn-w ${favorite ? 'active' : ''}`}
          type="button"
          onClick={onToggleFavorite}
          disabled={!isArticleOpen}
        >
          ⭐ <span className="btn-text">收藏</span>
        </button>
        <button className="btn btn-s" type="button" onClick={onExportNotes} disabled={!isArticleOpen}>
          💾
        </button>
        <div className="auth-area">
          <button className="btn btn-danger" type="button" onClick={user ? onLogout : onOpenAuth}>
            {user ? '退出' : '登录'}
          </button>
          <span className={`user-chip ${user ? '' : 'hidden'}`}>
            <span className="dot" />
            <span>{user?.username || '未登录'}</span>
          </span>
        </div>
      </div>
    </div>
  );
}
