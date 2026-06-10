import { getUserFromRequest, unauthorized } from '../../../../../lib/auth.js';
import { getDb } from '../../../../../lib/db.js';

export async function POST(request, { params }) {
  const authUser = getUserFromRequest(request);
  if (!authUser) return unauthorized();

  const { articleId: rawArticleId } = await params;
  const articleId = Number(rawArticleId);
  if (!Number.isInteger(articleId) || articleId < 0) {
    return Response.json({ error: 'Invalid article id' }, { status: 400 });
  }

  const body = await request.json().catch(() => ({}));
  const content = String(body.content || '').trim();
  const db = getDb();

  db.prepare(`
    INSERT INTO notes (user_id, article_id, content, updated_at)
    VALUES (?, ?, ?, datetime('now'))
    ON CONFLICT(user_id, article_id) DO UPDATE SET
      content = excluded.content,
      updated_at = datetime('now')
  `).run(authUser.id, articleId, content);

  return Response.json({
    note: {
      articleId: String(articleId),
      content,
    },
  });
}
