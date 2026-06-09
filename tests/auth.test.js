const test = require('node:test');
const assert = require('node:assert/strict');
const request = require('supertest');

const { createApp } = require('../server/app');

test('registers, logs in, and exposes the current user', async () => {
  const { app, close } = await createApp({ dbPath: ':memory:', testMode: true });
  try {
    const agent = request.agent(app);

    const registerRes = await agent
      .post('/api/auth/register')
      .send({ username: 'alice', password: 'Password123!' });

    assert.equal(registerRes.statusCode, 201);
    assert.equal(registerRes.body.user.username, 'alice');

    const meRes = await agent.get('/api/auth/me');
    assert.equal(meRes.statusCode, 200);
    assert.equal(meRes.body.user.username, 'alice');

    const logoutRes = await agent.post('/api/auth/logout');
    assert.equal(logoutRes.statusCode, 204);

    const afterLogoutRes = await agent.get('/api/auth/me');
    assert.equal(afterLogoutRes.statusCode, 401);
  } finally {
    await close();
  }
});

test('rejects invalid login credentials', async () => {
  const { app, close } = await createApp({ dbPath: ':memory:', testMode: true });
  try {
    const agent = request.agent(app);
    await agent.post('/api/auth/register').send({ username: 'bob', password: 'Password123!' });

    const loginRes = await agent
      .post('/api/auth/login')
      .send({ username: 'bob', password: 'wrong-password' });

    assert.equal(loginRes.statusCode, 401);
    assert.equal(loginRes.body.error, 'Invalid credentials');
  } finally {
    await close();
  }
});
