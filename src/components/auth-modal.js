'use client';

import { useState } from 'react';

export function AuthModal({ open, onClose, onSubmit }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  if (!open) return null;

  async function submit(mode) {
    await onSubmit(mode, { username, password });
  }

  return (
    <div className="auth-modal show" aria-hidden="false" onClick={(event) => event.target === event.currentTarget && onClose()}>
      <div className="auth-card">
        <h2>账号登录</h2>
        <p>登录后可以同步进度、笔记和收藏。</p>
        <form
          className="auth-form"
          onSubmit={(event) => {
            event.preventDefault();
            submit('login').catch(console.error);
          }}
        >
          <input
            autoComplete="username"
            minLength={3}
            name="username"
            onChange={(event) => setUsername(event.target.value)}
            placeholder="账号"
            required
            type="text"
            value={username}
          />
          <input
            autoComplete="current-password"
            minLength={8}
            name="password"
            onChange={(event) => setPassword(event.target.value)}
            placeholder="密码"
            required
            type="password"
            value={password}
          />
          <div className="auth-actions">
            <button className="btn btn-p" type="submit">
              登录
            </button>
            <button className="btn btn-w" type="button" onClick={() => submit('register').catch(console.error)}>
              注册并登录
            </button>
          </div>
        </form>
        <div className="auth-foot">
          <span>登录态保存在 httpOnly Cookie 中</span>
          <button className="btn btn-w" type="button" onClick={onClose}>
            关闭
          </button>
        </div>
      </div>
    </div>
  );
}
