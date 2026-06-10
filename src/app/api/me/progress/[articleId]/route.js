import { getUserFromRequest, unauthorized } from '../../../../../lib/auth.js';
import { getDb } from '../../../../../lib/db.js';

export async function PUT(request, { params }) {
  const authUser = getUserFromRequest(request);
  if (!authUser) return unauthorized();

  const { articleId: rawArticleId } = await params;
  const articleId = Number(rawArticleId);
  if (!Number.isInteger(articleId) || articleId < 0) {
    return Response.json({ error: 'Invalid article id' }, { status: 400 });
  }

  const body = await request.json().catch(() => ({}));
  const translationShown = body.translationShown ? 1 : 0;
  const highlighted = body.highlighted ? 1 : 0;
  const noteCount = Number.isFinite(Number(body.noteCount)) ? Math.max(0, Number(body.noteCount)) : 0;
  const db = getDb();

  db.prepare(`
    INSERT INTO progress (user_id, article_id, translation_shown, highlighted, note_count, updated_at)
    VALUES (?, ?, ?, ?, ?, datetime('now'))
    ON CONFLICT(user_id, article_id) DO UPDATE SET
      translation_shown = excluded.translation_shown,
      highlighted = excluded.highlighted,
      note_count = excluded.note_count,
      updated_at = datetime('now')
  `).run(authUser.id, articleId, translationShown, highlighted, noteCount);

  const progress = db
    .prepare('SELECT article_id, translation_shown, highlighted, note_count FROM progress WHERE user_id = ? AND article_id = ?')
    .get(authUser.id, articleId);

  return Response.json({
    progress: {
      articleId: String(progress.article_id),
      translationShown: Boolean(progress.translation_shown),
      highlighted: Boolean(progress.highlighted),
      noteCount: progress.note_count,
    },
  });
}
