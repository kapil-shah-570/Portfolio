const createCollectionController = require('./createCollectionController');
const experienceModel = require('../models/experienceModel');

module.exports = createCollectionController(experienceModel);
