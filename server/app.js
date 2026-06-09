const express = require('express');
const cookieParser = require('cookie-parser');
const helmet = require('helmet');
const path = require('path');

const { createDatabase } = require('./db');
const {
  clearAuthCookie,
  comparePassword,
  hashPassword,
  issueAuthCookie,
  requireAuth,
  signToken,
} = require('./auth');

function toUserRow(row) {
  return row ? { id: row.id, username: row.username, createdAt: row.created_at } : null;
}

function createApp(options = {}) {
  const db = createDatabase(options.dbPath);
  const app = express();

  app.use(helmet({ contentSecurityPolicy: false }));
  app.use(express.json({ limit: '1mb' }));
  app.use(cookieParser());

  app.get('/healthz', (_req, res) => {
    res.json({ ok: true });
  });

  app.get('/', (_req, res) => {
    res.sendFile(path.join(__dirname, '..', 'index.html'));
  });

  app.post('/api/auth/register', async (req, res) => {
    const username = String(req.body.username || '').trim();
    const password = String(req.body.password || '');

    if (username.length < 3 || password.length < 8) {
      return res.status(400).json({ error: 'Username and password are required' });
    }

    const existing = db.prepare('SELECT id FROM users WHERE username = ?').get(username);
    if (existing) {
      return res.status(409).json({ error: 'Username already exists' });
    }

    const passwordHash = await hashPassword(password);
    const result = db
      .prepare('INSERT INTO users (username, password_hash) VALUES (?, ?)')
      .run(username, passwordHash);

    const user = { id: result.lastInsertRowid, username };
    issueAuthCookie(res, signToken(user));
    return res.status(201).json({ user });
  });

  app.post('/api/auth/login', async (req, res) => {
    const username = String(req.body.username || '').trim();
    const password = String(req.body.password || '');
    const row = db
      .prepare('SELECT id, username, password_hash, created_at FROM users WHERE username = ?')
      .get(username);

    if (!row) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const ok = await comparePassword(password, row.password_hash);
    if (!ok) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const user = toUserRow(row);
    issueAuthCookie(res, signToken({ id: user.id, username: user.username }));
    return res.json({ user });
  });

  app.post('/api/auth/logout', (_req, res) => {
    clearAuthCookie(res);
    return res.status(204).end();
  });

  app.get('/api/auth/me', requireAuth, (req, res) => {
    const row = db
      .prepare('SELECT id, username, created_at FROM users WHERE id = ?')
      .get(req.user.id);
    if (!row) {
      clearAuthCookie(res);
      return res.status(401).json({ error: 'Unauthorized' });
    }
    return res.json({ user: toUserRow(row) });
  });

  app.put('/api/me/progress/:articleId', requireAuth, (req, res) => {
    const articleId = Number(req.params.articleId);
    const translationShown = req.body.translationShown ? 1 : 0;
    const highlighted = req.body.highlighted ? 1 : 0;
    const noteCount = Number.isFinite(Number(req.body.noteCount)) ? Number(req.body.noteCount) : 0;

    db.prepare(`
      INSERT INTO progress (user_id, article_id, translation_shown, highlighted, note_count, updated_at)
      VALUES (?, ?, ?, ?, ?, datetime('now'))
      ON CONFLICT(user_id, article_id) DO UPDATE SET
        translation_shown = excluded.translation_shown,
        highlighted = excluded.highlighted,
        note_count = excluded.note_count,
        updated_at = datetime('now')
    `).run(req.user.id, articleId, translationShown, highlighted, noteCount);

    const progress = db
      .prepare('SELECT article_id, translation_shown, highlighted, note_count FROM progress WHERE user_id = ? AND article_id = ?')
      .get(req.user.id, articleId);

    return res.json({
      progress: {
        articleId: String(progress.article_id),
        translationShown: Boolean(progress.translation_shown),
        highlighted: Boolean(progress.highlighted),
        noteCount: progress.note_count,
      },
    });
  });

  app.post('/api/me/notes/:articleId', requireAuth, (req, res) => {
    const articleId = Number(req.params.articleId);
    const content = String(req.body.content || '').trim();

    db.prepare(`
      INSERT INTO notes (user_id, article_id, content, updated_at)
      VALUES (?, ?, ?, datetime('now'))
      ON CONFLICT(user_id, article_id) DO UPDATE SET
        content = excluded.content,
        updated_at = datetime('now')
    `).run(req.user.id, articleId, content);

    return res.json({
      note: {
        articleId: String(articleId),
        content,
      },
    });
  });

  app.post('/api/me/favorites/:articleId', requireAuth, (req, res) => {
    const articleId = Number(req.params.articleId);
    const favorite = Boolean(req.body.favorite);

    if (favorite) {
      db.prepare('INSERT OR IGNORE INTO favorites (user_id, article_id) VALUES (?, ?)').run(req.user.id, articleId);
    } else {
      db.prepare('DELETE FROM favorites WHERE user_id = ? AND article_id = ?').run(req.user.id, articleId);
    }

    return res.json({
      favorite,
      articleId: String(articleId),
    });
  });

  app.get('/api/me/dashboard', requireAuth, (req, res) => {
    const progressRows = db
      .prepare('SELECT article_id, translation_shown, highlighted, note_count FROM progress WHERE user_id = ?')
      .all(req.user.id);
    const noteRows = db
      .prepare('SELECT article_id, content FROM notes WHERE user_id = ?')
      .all(req.user.id);
    const favoriteRows = db
      .prepare('SELECT article_id FROM favorites WHERE user_id = ?')
      .all(req.user.id);

    const progress = {};
    for (const row of progressRows) {
      progress[String(row.article_id)] = {
        translationShown: Boolean(row.translation_shown),
        highlighted: Boolean(row.highlighted),
        noteCount: row.note_count,
      };
    }

    const notes = {};
    for (const row of noteRows) {
      notes[String(row.article_id)] = { content: row.content };
    }

    res.json({
      progress,
      notes,
      favorites: favoriteRows.map((row) => String(row.article_id)),
    });
  });

  app.use((err, _req, res, _next) => {
    if (options.testMode) {
      throw err;
    }
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  });

  return {
    app,
    db,
    close: async () => {
      db.close();
    },
  };
}

module.exports = { createApp };
