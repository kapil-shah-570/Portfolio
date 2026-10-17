const MongoCollectionModel = require('./mongoCollectionModel');
const initialData = require('./initialData');

module.exports = new MongoCollectionModel({
  name: 'blogs',
  titleField: 'title',
  required: ['title', 'excerpt', 'date'],
  initialRecords: initialData.blogs,
  fields: {
    title: 'string', slug: 'string', excerpt: 'string', content: 'string', cover: 'string',
    date: 'string', author: 'string', readingTime: 'number', tags: 'list', published: 'boolean',
  },
});
