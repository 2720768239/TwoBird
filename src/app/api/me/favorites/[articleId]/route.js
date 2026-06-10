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
  const favorite = Boolean(body.favorite);
  const db = getDb();

  if (favorite) {
    db.prepare('INSERT OR IGNORE INTO favorites (user_id, article_id) VALUES (?, ?)').run(authUser.id, articleId);
  } else {
    db.prepare('DELETE FROM favorites WHERE user_id = ? AND article_id = ?').run(authUser.id, articleId);
  }

  return Response.json({
    favorite,
    articleId: String(articleId),
  });
}
