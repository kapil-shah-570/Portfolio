const createCollectionRoutes = require('./createCollectionRoutes');
const educationController = require('../controllers/educationController');

module.exports = createCollectionRoutes(educationController);
