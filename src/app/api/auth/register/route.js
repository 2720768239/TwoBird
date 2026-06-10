import { NextResponse } from 'next/server.js';
import { hashPassword, setAuthCookie, signToken } from '../../../../lib/auth.js';
import { getDb } from '../../../../lib/db.js';

export async function POST(request) {
  const db = getDb();
  const body = await request.json().catch(() => ({}));
  const username = String(body.username || '').trim();
  const password = String(body.password || '');

  if (username.length < 3 || password.length < 8) {
    return Response.json({ error: 'Username and password are required' }, { status: 400 });
  }

  const existing = db.prepare('SELECT id FROM users WHERE username = ?').get(username);
  if (existing) {
    return Response.json({ error: 'Username already exists' }, { status: 409 });
  }

  const passwordHash = await hashPassword(password);
  const result = db.prepare('INSERT INTO users (username, password_hash) VALUES (?, ?)').run(username, passwordHash);
  const user = { id: result.lastInsertRowid, username };
  const response = NextResponse.json({ user }, { status: 201 });
  setAuthCookie(response, signToken(user));
  return response;
}
