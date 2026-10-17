const express = require('express');
const requireAdminSession = require('../middleware/requireAdminSession');

function createCollectionRoutes(controller) {
  const router = express.Router();

  router.get('/', controller.list);
  router.get('/:id', controller.get);
  router.post('/', requireAdminSession, controller.create);
  router.put('/:id', requireAdminSession, controller.update);
  router.delete('/:id', requireAdminSession, controller.remove);
  return router;
}

module.exports = createCollectionRoutes;
