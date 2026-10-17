const createCollectionController = require('./createCollectionController');
const skillModel = require('../models/skillModel');

module.exports = createCollectionController(skillModel);
