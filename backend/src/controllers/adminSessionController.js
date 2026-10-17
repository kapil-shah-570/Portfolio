const {
  createSessionToken,
  sessionCookieOptions,
  sessionExpirySeconds,
} = require('../services/adminSession');

const SESSION_COOKIE = 'portfolio_admin_session';
const crypto = require('node:crypto');

function safeEqual(left, right) {
  const leftHash = crypto.createHash('sha256').update(left).digest();
  const rightHash = crypto.createHash('sha256').update(right).digest();
  return crypto.timingSafeEqual(leftHash, rightHash) && left.length === right.length;
}

function login(req, res) {
  const configuredEmail = process.env.ADMIN_EMAIL;
  const configuredPassword = process.env.ADMIN_PASSWORD;
  const sessionSecret = process.env.ADMIN_SESSION_SECRET;

  if (!configuredEmail || !configuredPassword || !sessionSecret) {
    return res.status(503).json({ error: 'Configure ADMIN_EMAIL, ADMIN_PASSWORD, and ADMIN_SESSION_SECRET in the backend environment.' });
  }

  const email = typeof req.body?.email === 'string' ? req.body.email.trim().toLowerCase() : '';
  const password = typeof req.body?.password === 'string' ? req.body.password : '';
  if (!safeEqual(email, configuredEmail.trim().toLowerCase()) || !safeEqual(password, configuredPassword)) {
    return res.status(401).json({ error: 'Email or password is incorrect.' });
  }

  res.cookie(SESSION_COOKIE, createSessionToken(), sessionCookieOptions());
  return res.json({ authenticated: true, expiresIn: sessionExpirySeconds() });
}

function createSession(req, res) {
  return res.json({ authenticated: true });
}

function logout(req, res) {
  res.clearCookie(SESSION_COOKIE, sessionCookieOptions());
  return res.status(204).end();
}

module.exports = { createSession, login, logout, SESSION_COOKIE };
