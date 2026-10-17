const createCollectionController = require('./createCollectionController');
const blogModel = require('../models/blogModel');

module.exports = createCollectionController(blogModel);
