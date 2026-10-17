const createCollectionRoutes = require('./createCollectionRoutes');
const skillController = require('../controllers/skillController');

module.exports = createCollectionRoutes(skillController);
