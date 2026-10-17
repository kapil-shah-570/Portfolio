const crypto = require('node:crypto');

const SESSION_DURATION_SECONDS = 12 * 60 * 60;

function signingSecret() {
  return process.env.ADMIN_SESSION_SECRET || '';
}

function sessionExpirySeconds() {
  return SESSION_DURATION_SECONDS;
}

function createSessionToken() {
  const secret = signingSecret();
  if (!secret) throw new Error('ADMIN_SESSION_SECRET is required to create an admin session.');
  const payload = Buffer.from(JSON.stringify({
    exp: Math.floor(Date.now() / 1000) + SESSION_DURATION_SECONDS,
  })).toString('base64url');
  const signature = crypto.createHmac('sha256', secret).update(payload).digest('base64url');
  return `${payload}.${signature}`;
}

function isValidSessionToken(token) {
  const secret = signingSecret();
  if (!secret || typeof token !== 'string') return false;
  const [payload, signature, extra] = token.split('.');
  if (!payload || !signature || extra !== undefined) return false;
  const expected = crypto.createHmac('sha256', secret).update(payload).digest();
  let actual;
  try {
    actual = Buffer.from(signature, 'base64url');
  } catch {
    return false;
  }
  if (actual.length !== expected.length || !crypto.timingSafeEqual(actual, expected)) return false;
  try {
    const claims = JSON.parse(Buffer.from(payload, 'base64url').toString('utf8'));
    return Number.isInteger(claims.exp) && claims.exp > Math.floor(Date.now() / 1000);
  } catch {
    return false;
  }
}

function sessionCookieOptions() {
  const sameSite = (process.env.ADMIN_COOKIE_SAME_SITE || 'strict').toLowerCase();
  if (!['strict', 'lax', 'none'].includes(sameSite)) {
    throw new Error('ADMIN_COOKIE_SAME_SITE must be "strict", "lax", or "none".');
  }
  if (sameSite === 'none' && process.env.NODE_ENV !== 'production') {
    throw new Error('ADMIN_COOKIE_SAME_SITE=none requires NODE_ENV=production and HTTPS.');
  }

  return {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite,
    path: '/api',
    maxAge: SESSION_DURATION_SECONDS * 1000,
  };
}

module.exports = { createSessionToken, isValidSessionToken, sessionCookieOptions, sessionExpirySeconds };
