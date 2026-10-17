const { isValidSessionToken } = require('../services/adminSession');
const { SESSION_COOKIE } = require('../controllers/adminSessionController');

module.exports = function requireAdminSession(req, res, next) {
  if (!isValidSessionToken(req.cookies?.[SESSION_COOKIE])) {
    return res.status(401).json({ error: 'Sign in to make changes.' });
  }
  return next();
};
