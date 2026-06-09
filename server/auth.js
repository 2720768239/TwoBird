const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const COOKIE_NAME = 'twobird_token';
const JWT_SECRET = process.env.JWT_SECRET || 'twobird-dev-secret';
const TOKEN_TTL = '7d';

function signToken(payload) {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: TOKEN_TTL });
}

function verifyToken(token) {
  return jwt.verify(token, JWT_SECRET);
}

function hashPassword(password) {
  return bcrypt.hash(password, 10);
}

function comparePassword(password, passwordHash) {
  return bcrypt.compare(password, passwordHash);
}

function issueAuthCookie(res, token) {
  res.cookie(COOKIE_NAME, token, {
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });
}

function clearAuthCookie(res) {
  res.clearCookie(COOKIE_NAME, {
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
  });
}

function requireAuth(req, res, next) {
  const token = req.cookies[COOKIE_NAME];
  if (!token) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  try {
    req.user = verifyToken(token);
    return next();
  } catch {
    return res.status(401).json({ error: 'Unauthorized' });
  }
}

module.exports = {
  COOKIE_NAME,
  clearAuthCookie,
  comparePassword,
  hashPassword,
  issueAuthCookie,
  requireAuth,
  signToken,
  verifyToken,
};
