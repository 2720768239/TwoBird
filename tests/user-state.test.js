const test = require('node:test');
const assert = require('node:assert/strict');

const { articleParams, cookieFromResponse, jsonRequest, resetNextDb } = require('./route-test-utils');

test('persists progress, notes, and favorites through Next API routes', async () => {
  await resetNextDb();
  const registerRoute = await import('../src/app/api/auth/register/route.js');
  const progressRoute = await import('../src/app/api/me/progress/[articleId]/route.js');
  const notesRoute = await import('../src/app/api/me/notes/[articleId]/route.js');
  const favoritesRoute = await import('../src/app/api/me/favorites/[articleId]/route.js');
  const dashboardRoute = await import('../src/app/api/me/dashboard/route.js');

  const registerRes = await registerRoute.POST(jsonRequest({ username: 'carol', password: 'Password123!' }));
  const cookie = cookieFromResponse(registerRes);

  const progressRes = await progressRoute.PUT(
    jsonRequest({ translationShown: true, highlighted: true, noteCount: 2 }, cookie),
    articleParams(0),
  );
  assert.equal(progressRes.status, 200);
  assert.equal((await progressRes.json()).progress.translationShown, true);

  const noteRes = await notesRoute.POST(
    jsonRequest({ content: 'Useful distinction between workflow and agent.' }, cookie),
    articleParams(0),
  );
  assert.equal(noteRes.status, 200);

  const favoriteRes = await favoritesRoute.POST(jsonRequest({ favorite: true }, cookie), articleParams(0));
  assert.equal(favoriteRes.status, 200);

  const snapshotRes = await dashboardRoute.GET(jsonRequest({}, cookie));
  const snapshot = await snapshotRes.json();
  assert.equal(snapshotRes.status, 200);
  assert.equal(snapshot.progress['0'].translationShown, true);
  assert.equal(snapshot.notes['0'].content, 'Useful distinction between workflow and agent.');
  assert.equal(snapshot.favorites.includes('0'), true);
});
