const createCollectionController = require('./createCollectionController');
const educationModel = require('../models/educationModel');

module.exports = createCollectionController(educationModel);
