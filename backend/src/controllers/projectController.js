const createCollectionController = require('./createCollectionController');
const projectModel = require('../models/projectModel');

module.exports = createCollectionController(projectModel);
