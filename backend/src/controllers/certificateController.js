const createCollectionController = require('./createCollectionController');
const certificateModel = require('../models/certificateModel');

module.exports = createCollectionController(certificateModel);
