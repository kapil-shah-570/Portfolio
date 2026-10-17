const MongoCollectionModel = require('./mongoCollectionModel');
const initialData = require('./initialData');

module.exports = new MongoCollectionModel({
  name: 'certificates',
  titleField: 'title',
  required: ['title', 'issuer', 'date'],
  initialRecords: initialData.certificates,
  fields: {
    title: 'string', slug: 'string', issuer: 'string', date: 'string', image: 'string',
    description: 'string', skills: 'list', credentialId: 'string', credentialUrl: 'string',
  },
});
