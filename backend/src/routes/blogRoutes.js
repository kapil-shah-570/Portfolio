const createCollectionRoutes = require('./createCollectionRoutes');
const blogController = require('../controllers/blogController');

module.exports = createCollectionRoutes(blogController);
