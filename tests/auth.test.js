const test = require('node:test');
const assert = require('node:assert/strict');

const { cookieFromResponse, jsonRequest, resetNextDb } = require('./route-test-utils');

test('registers, logs in, and exposes the current user through Next API routes', async () => {
  await resetNextDb();
  const registerRoute = await import('../src/app/api/auth/register/route.js');
  const meRoute = await import('../src/app/api/auth/me/route.js');
  const logoutRoute = await import('../src/app/api/auth/logout/route.js');

  const registerRes = await registerRoute.POST(jsonRequest({ username: 'alice', password: 'Password123!' }));
  assert.equal(registerRes.status, 201);
  assert.equal((await registerRes.json()).user.username, 'alice');

  const cookie = cookieFromResponse(registerRes);
  assert.match(cookie, /^twobird_token=/);

  const meRes = await meRoute.GET(jsonRequest({}, cookie));
  assert.equal(meRes.status, 200);
  assert.equal((await meRes.json()).user.username, 'alice');

  const logoutRes = await logoutRoute.POST();
  assert.equal(logoutRes.status, 204);

  const afterLogoutRes = await meRoute.GET(jsonRequest());
  assert.equal(afterLogoutRes.status, 401);
});

test('rejects invalid login credentials through Next API routes', async () => {
  await resetNextDb();
  const registerRoute = await import('../src/app/api/auth/register/route.js');
  const loginRoute = await import('../src/app/api/auth/login/route.js');

  await registerRoute.POST(jsonRequest({ username: 'bob', password: 'Password123!' }));

  const loginRes = await loginRoute.POST(jsonRequest({ username: 'bob', password: 'wrong-password' }));
  assert.equal(loginRes.status, 401);
  assert.equal((await loginRes.json()).error, 'Invalid credentials');
});
