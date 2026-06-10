import { createRequire } from 'node:module';
import fs from 'node:fs';
import path from 'node:path';

const require = createRequire(import.meta.url);

let dbInstance = null;

function now() {
  return new Date().toISOString().replace('T', ' ').slice(0, 19);
}

function createEmptyState() {
  return {
    nextUserId: 1,
    users: [],
    progress: [],
    notes: [],
    favorites: [],
  };
}

class JsonDatabase {
  constructor(dbPath) {
    this.filePath = dbPath === ':memory:' ? null : dbPath.replace(/\.db$/i, '.json');
    this.state = createEmptyState();
    if (this.filePath && fs.existsSync(this.filePath)) {
      this.state = { ...this.state, ...JSON.parse(fs.readFileSync(this.filePath, 'utf8')) };
    }
  }

  persist() {
    if (!this.filePath) return;
    fs.mkdirSync(path.dirname(this.filePath), { recursive: true });
    fs.writeFileSync(this.filePath, JSON.stringify(this.state, null, 2), 'utf8');
  }

  pragma() {}

  exec() {}

  close() {
    this.persist();
  }

  prepare(sql) {
    const normalized = sql.toLowerCase().replace(/\s+/g, ' ').trim();
    return {
      get: (...params) => this.get(normalized, params),
      all: (...params) => this.all(normalized, params),
      run: (...params) => this.run(normalized, params),
    };
  }

  get(sql, params) {
    if (sql.includes('from users where username')) {
      const row = this.state.users.find((user) => user.username === params[0]);
      if (!row) return undefined;
      if (sql.startsWith('select id from users')) return { id: row.id };
      return { ...row };
    }

    if (sql.includes('from users where id')) {
      const row = this.state.users.find((user) => user.id === Number(params[0]));
      return row ? { id: row.id, username: row.username, created_at: row.created_at } : undefined;
    }

    if (sql.includes('from progress where user_id') && sql.includes('and article_id')) {
      const row = this.state.progress.find(
        (progress) => progress.user_id === Number(params[0]) && progress.article_id === Number(params[1]),
      );
      return row ? { ...row } : undefined;
    }

    throw new Error(`Unsupported JSON database get query: ${sql}`);
  }

  all(sql, params) {
    const userId = Number(params[0]);
    if (sql.includes('from progress where user_id')) {
      return this.state.progress.filter((row) => row.user_id === userId).map((row) => ({ ...row }));
    }
    if (sql.includes('from notes where user_id')) {
      return this.state.notes.filter((row) => row.user_id === userId).map((row) => ({ ...row }));
    }
    if (sql.includes('from favorites where user_id')) {
      return this.state.favorites.filter((row) => row.user_id === userId).map((row) => ({ ...row }));
    }
    throw new Error(`Unsupported JSON database all query: ${sql}`);
  }

  run(sql, params) {
    if (sql.startsWith('insert into users')) {
      const [username, passwordHash] = params;
      if (this.state.users.some((user) => user.username === username)) {
        throw new Error('UNIQUE constraint failed: users.username');
      }
      const id = this.state.nextUserId;
      this.state.nextUserId += 1;
      this.state.users.push({ id, username, password_hash: passwordHash, created_at: now() });
      this.persist();
      return { lastInsertRowid: id, changes: 1 };
    }

    if (sql.startsWith('insert into progress')) {
      const [userId, articleId, translationShown, highlighted, noteCount] = params.map(Number);
      const existing = this.state.progress.find(
        (row) => row.user_id === userId && row.article_id === articleId,
      );
      if (existing) {
        existing.translation_shown = translationShown;
        existing.highlighted = highlighted;
        existing.note_count = noteCount;
        existing.updated_at = now();
      } else {
        this.state.progress.push({
          user_id: userId,
          article_id: articleId,
          translation_shown: translationShown,
          highlighted,
          note_count: noteCount,
          updated_at: now(),
        });
      }
      this.persist();
      return { changes: 1 };
    }

    if (sql.startsWith('insert into notes')) {
      const [userId, articleId, content] = params;
      const existing = this.state.notes.find(
        (row) => row.user_id === Number(userId) && row.article_id === Number(articleId),
      );
      if (existing) {
        existing.content = content;
        existing.updated_at = now();
      } else {
        this.state.notes.push({
          user_id: Number(userId),
          article_id: Number(articleId),
          content,
          updated_at: now(),
        });
      }
      this.persist();
      return { changes: 1 };
    }

    if (sql.startsWith('insert or ignore into favorites')) {
      const [userId, articleId] = params.map(Number);
      const exists = this.state.favorites.some((row) => row.user_id === userId && row.article_id === articleId);
      if (!exists) {
        this.state.favorites.push({ user_id: userId, article_id: articleId, created_at: now() });
        this.persist();
        return { changes: 1 };
      }
      return { changes: 0 };
    }

    if (sql.startsWith('delete from favorites')) {
      const [userId, articleId] = params.map(Number);
      const before = this.state.favorites.length;
      this.state.favorites = this.state.favorites.filter(
        (row) => row.user_id !== userId || row.article_id !== articleId,
      );
      this.persist();
      return { changes: before - this.state.favorites.length };
    }

    throw new Error(`Unsupported JSON database run query: ${sql}`);
  }
}

function createSqliteDatabase(dbPath) {
  const Database = require('better-sqlite3');
  if (dbPath !== ':memory:') {
    fs.mkdirSync(path.dirname(dbPath), { recursive: true });
  }

  const db = new Database(dbPath);
  db.pragma('journal_mode = WAL');
  db.pragma('foreign_keys = ON');
  db.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT NOT NULL UNIQUE,
      password_hash TEXT NOT NULL,
      created_at TEXT NOT NULL DEFAULT (datetime('now'))
    );

    CREATE TABLE IF NOT EXISTS progress (
      user_id INTEGER NOT NULL,
      article_id INTEGER NOT NULL,
      translation_shown INTEGER NOT NULL DEFAULT 0,
      highlighted INTEGER NOT NULL DEFAULT 0,
      note_count INTEGER NOT NULL DEFAULT 0,
      updated_at TEXT NOT NULL DEFAULT (datetime('now')),
      PRIMARY KEY (user_id, article_id),
      FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
    );

    CREATE TABLE IF NOT EXISTS notes (
      user_id INTEGER NOT NULL,
      article_id INTEGER NOT NULL,
      content TEXT NOT NULL DEFAULT '',
      updated_at TEXT NOT NULL DEFAULT (datetime('now')),
      PRIMARY KEY (user_id, article_id),
      FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
    );

    CREATE TABLE IF NOT EXISTS favorites (
      user_id INTEGER NOT NULL,
      article_id INTEGER NOT NULL,
      created_at TEXT NOT NULL DEFAULT (datetime('now')),
      PRIMARY KEY (user_id, article_id),
      FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
    );
  `);

  return db;
}

function createFallbackDatabase(dbPath) {
  return new JsonDatabase(dbPath);
}

export function getDb() {
  if (dbInstance) return dbInstance;

  const dbPath = process.env.DATABASE_PATH || path.join('data', 'twobird.db');
  if (process.env.TWOBIRD_DB_DRIVER === 'memory') {
    dbInstance = createFallbackDatabase(':memory:');
    return dbInstance;
  }

  try {
    dbInstance = createSqliteDatabase(dbPath);
  } catch (error) {
    if (process.env.TWOBIRD_DB_DRIVER === 'sqlite') throw error;
    console.warn(`Falling back to JSON database because better-sqlite3 could not load: ${error.message}`);
    dbInstance = createFallbackDatabase(dbPath);
  }
  return dbInstance;
}

export function resetDbForTest() {
  dbInstance?.close?.();
  dbInstance = null;
}

export function toUser(row) {
  return row ? { id: row.id, username: row.username, createdAt: row.created_at } : null;
}
