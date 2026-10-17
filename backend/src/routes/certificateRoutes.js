const createCollectionRoutes = require('./createCollectionRoutes');
const certificateController = require('../controllers/certificateController');

module.exports = createCollectionRoutes(certificateController);
