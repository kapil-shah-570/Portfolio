const MongoCollectionModel = require('./mongoCollectionModel');
const initialData = require('./initialData');

module.exports = new MongoCollectionModel({
  name: 'projects',
  titleField: 'title',
  required: ['title', 'description'],
  initialRecords: initialData.projects,
  fields: {
    title: 'string', slug: 'string', description: 'string', longDescription: 'string', image: 'string',
    featured: 'boolean', tags: 'list', techStack: 'list', gallery: 'list', client: 'string',
    role: 'string', duration: 'string', completedAt: 'string', liveUrl: 'string', repoUrl: 'string',
  },
});
