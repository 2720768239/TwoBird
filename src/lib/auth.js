import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const COOKIE_NAME = 'twobird_token';
const TOKEN_TTL = '7d';

function getJwtSecret() {
  const secret = process.env.JWT_SECRET || 'twobird-dev-secret';
  if (process.env.NODE_ENV === 'production' && secret === 'twobird-dev-secret') {
    throw new Error('JWT_SECRET must be set in production');
  }
  return secret;
}

export function signToken(payload) {
  return jwt.sign(payload, getJwtSecret(), { expiresIn: TOKEN_TTL });
}

export function verifyToken(token) {
  return jwt.verify(token, getJwtSecret());
}

export function hashPassword(password) {
  return bcrypt.hash(password, 10);
}

export function comparePassword(password, passwordHash) {
  return bcrypt.compare(password, passwordHash);
}

export function setAuthCookie(response, token) {
  response.cookies.set(COOKIE_NAME, token, {
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    maxAge: 7 * 24 * 60 * 60,
    path: '/',
  });
}

export function clearAuthCookie(response) {
  response.cookies.set(COOKIE_NAME, '', {
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    maxAge: 0,
    path: '/',
  });
}

export function getUserFromRequest(request) {
  const token = request.cookies.get(COOKIE_NAME)?.value;
  if (!token) return null;
  try {
    return verifyToken(token);
  } catch {
    return null;
  }
}

export function unauthorized() {
  return Response.json({ error: 'Unauthorized' }, { status: 401 });
}
