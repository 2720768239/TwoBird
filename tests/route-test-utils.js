const COOKIE_NAME = 'twobird_token';

process.env.TWOBIRD_DB_DRIVER = 'memory';
process.env.JWT_SECRET = 'twobird-test-secret';

function readCookie(cookieHeader, name) {
  const match = String(cookieHeader || '').match(new RegExp(`${name}=([^;]+)`));
  return match ? decodeURIComponent(match[1]) : null;
}

function cookieFromResponse(response, name = COOKIE_NAME) {
  const setCookie = response.headers.get('set-cookie') || '';
  const value = readCookie(setCookie, name);
  return value ? `${name}=${encodeURIComponent(value)}` : '';
}

function jsonRequest(body = {}, cookieHeader = '') {
  return {
    json: async () => body,
    cookies: {
      get(name) {
        const value = readCookie(cookieHeader, name);
        return value ? { value } : undefined;
      },
    },
  };
}

function articleParams(articleId) {
  return { params: Promise.resolve({ articleId: String(articleId) }) };
}

async function resetNextDb() {
  const { resetDbForTest } = await import('../src/lib/db.js');
  resetDbForTest();
}

module.exports = {
  articleParams,
  cookieFromResponse,
  jsonRequest,
  resetNextDb,
};
