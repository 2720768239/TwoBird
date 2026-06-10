import { clearAuthCookie, getUserFromRequest, unauthorized } from '../../../../lib/auth.js';
import { getDb, toUser } from '../../../../lib/db.js';
import { NextResponse } from 'next/server.js';

export async function GET(request) {
  const authUser = getUserFromRequest(request);
  if (!authUser) return unauthorized();

  const db = getDb();
  const row = db.prepare('SELECT id, username, created_at FROM users WHERE id = ?').get(authUser.id);
  if (!row) {
    const response = NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    clearAuthCookie(response);
    return response;
  }

  return Response.json({ user: toUser(row) });
}
