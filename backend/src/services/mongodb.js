const mongoose = require('mongoose');

async function connectToMongoDB() {
  const uri = process.env.MONGODB_URI;
  if (!uri) throw new Error('MONGODB_URI must be configured in the backend environment.');

  await mongoose.connect(uri, {
    dbName: process.env.MONGODB_DATABASE || undefined,
  });
  console.log(`Connected to MongoDB database "${mongoose.connection.name}".`);
}

module.exports = { connectToMongoDB, mongoose };
