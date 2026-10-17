const MongoCollectionModel = require('./mongoCollectionModel');
const initialData = require('./initialData');

module.exports = new MongoCollectionModel({
  name: 'experiences',
  titleField: 'title',
  required: ['title', 'company', 'startDate', 'type'],
  initialRecords: initialData.experiences,
  fields: {
    title: 'string', slug: 'string', company: 'string', companyLogo: 'string', companyUrl: 'string',
    location: 'string', startDate: 'string', endDate: 'string', current: 'boolean', type: 'string',
    summary: 'string', description: 'string', responsibilities: 'list', achievements: 'list', techStack: 'list',
  },
});
