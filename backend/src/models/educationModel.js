const MongoCollectionModel = require('./mongoCollectionModel');
const initialData = require('./initialData');

module.exports = new MongoCollectionModel({
  name: 'educations',
  titleField: 'degree',
  required: ['degree', 'institution', 'startDate'],
  initialRecords: initialData.educations,
  fields: {
    degree: 'string', slug: 'string', institution: 'string', location: 'string',
    startDate: 'string', endDate: 'string', logo: 'string', description: 'string',
  },
});
