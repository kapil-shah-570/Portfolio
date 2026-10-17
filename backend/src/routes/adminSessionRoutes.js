const express = require('express');
const { createSession, login, logout } = require('../controllers/adminSessionController');
const requireAdminSession = require('../middleware/requireAdminSession');

const router = express.Router();
router.post('/login', login);
router.get('/session', requireAdminSession, createSession);
router.post('/logout', logout);

module.exports = router;
