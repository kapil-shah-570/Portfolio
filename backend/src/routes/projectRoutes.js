const createCollectionRoutes = require('./createCollectionRoutes');
const projectController = require('../controllers/projectController');

module.exports = createCollectionRoutes(projectController);
