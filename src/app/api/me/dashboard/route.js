import { getUserFromRequest, unauthorized } from '../../../../lib/auth.js';
import { getDb } from '../../../../lib/db.js';

export async function GET(request) {
  const authUser = getUserFromRequest(request);
  if (!authUser) return unauthorized();

  const db = getDb();
  const progressRows = db
    .prepare('SELECT article_id, translation_shown, highlighted, note_count FROM progress WHERE user_id = ?')
    .all(authUser.id);
  const noteRows = db.prepare('SELECT article_id, content FROM notes WHERE user_id = ?').all(authUser.id);
  const favoriteRows = db.prepare('SELECT article_id FROM favorites WHERE user_id = ?').all(authUser.id);

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

  return Response.json({
    progress,
    notes,
    favorites: favoriteRows.map((row) => String(row.article_id)),
  });
}
