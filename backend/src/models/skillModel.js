const MongoCollectionModel = require('./mongoCollectionModel');
const initialData = require('./initialData');

module.exports = new MongoCollectionModel({
  name: 'skills',
  titleField: 'name',
  required: ['name', 'category', 'level'],
  initialRecords: initialData.skills,
  fields: {
    name: 'string', slug: 'string', category: 'string', icon: 'string', level: 'number',
    summary: 'string', description: 'string', yearsOfExperience: 'number', highlights: 'list', tools: 'list',
  },
});
