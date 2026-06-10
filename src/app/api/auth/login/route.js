import { NextResponse } from 'next/server.js';
import { comparePassword, setAuthCookie, signToken } from '../../../../lib/auth.js';
import { getDb, toUser } from '../../../../lib/db.js';

export async function POST(request) {
  const db = getDb();
  const body = await request.json().catch(() => ({}));
  const username = String(body.username || '').trim();
  const password = String(body.password || '');
  const row = db.prepare('SELECT id, username, password_hash, created_at FROM users WHERE username = ?').get(username);

  if (!row) {
    return Response.json({ error: 'Invalid credentials' }, { status: 401 });
  }

  const ok = await comparePassword(password, row.password_hash);
  if (!ok) {
    return Response.json({ error: 'Invalid credentials' }, { status: 401 });
  }

  const user = toUser(row);
  const response = NextResponse.json({ user });
  setAuthCookie(response, signToken({ id: user.id, username: user.username }));
  return response;
}
