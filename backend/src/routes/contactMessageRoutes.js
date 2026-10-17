const express = require('express');
const controller = require('../controllers/contactMessageController');
const requireAdminSession = require('../middleware/requireAdminSession');

const router = express.Router();
router.post('/', controller.create);
router.get('/', requireAdminSession, controller.list);
router.get('/export.csv', requireAdminSession, controller.exportCsv);
router.delete('/:id', requireAdminSession, controller.remove);

module.exports = router;
