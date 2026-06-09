const test = require('node:test');
const assert = require('node:assert/strict');
const request = require('supertest');

const { createApp } = require('../server/app');

test('persists progress, notes, and favorites for the logged-in user', async () => {
  const { app, close } = await createApp({ dbPath: ':memory:', testMode: true });
  try {
    const agent = request.agent(app);

    await agent.post('/api/auth/register').send({ username: 'carol', password: 'Password123!' });

    const progressRes = await agent
      .put('/api/me/progress/0')
      .send({ translationShown: true, highlighted: true, noteCount: 2 });
    assert.equal(progressRes.statusCode, 200);
    assert.equal(progressRes.body.progress.translationShown, true);

    const noteRes = await agent
      .post('/api/me/notes/0')
      .send({ content: 'Useful distinction between workflow and agent.' });
    assert.equal(noteRes.statusCode, 200);

    const favoriteRes = await agent
      .post('/api/me/favorites/0')
      .send({ favorite: true });
    assert.equal(favoriteRes.statusCode, 200);

    const snapshotRes = await agent.get('/api/me/dashboard');
    assert.equal(snapshotRes.statusCode, 200);
    assert.equal(snapshotRes.body.progress['0'].translationShown, true);
    assert.equal(snapshotRes.body.notes['0'].content, 'Useful distinction between workflow and agent.');
    assert.equal(snapshotRes.body.favorites.includes('0'), true);
  } finally {
    await close();
  }
});
