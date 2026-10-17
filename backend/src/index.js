const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
require('dotenv').config();
const { connectToMongoDB, mongoose } = require('./services/mongodb');

const adminSessionRoutes = require('./routes/adminSessionRoutes');
const contactMessageRoutes = require('./routes/contactMessageRoutes');
const blogRoutes = require('./routes/blogRoutes');
const certificateRoutes = require('./routes/certificateRoutes');
const educationRoutes = require('./routes/educationRoutes');
const experienceRoutes = require('./routes/experienceRoutes');
const projectRoutes = require('./routes/projectRoutes');
const skillRoutes = require('./routes/skillRoutes');
const collections = [
  require('./models/blogModel'),
  require('./models/certificateModel'),
  require('./models/educationModel'),
  require('./models/experienceModel'),
  require('./models/projectModel'),
  require('./models/skillModel'),
];

const app = express();
const port = Number(process.env.PORT) || 5000;
const configuredOrigins = [
  ...(process.env.CORS_ORIGINS || '').split(','),
  process.env.FRONTEND_URL,
  process.env.ADMIN_URL,
]
  .filter(Boolean)
  .map((origin) => origin.trim());
const allowedOrigins = [...new Set(configuredOrigins.length
  ? configuredOrigins
  : ['http://localhost:3000', 'http://localhost:3001'])];

app.use(cors({
  origin(origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) return callback(null, true);
    return callback(new Error('This origin is not allowed by the API CORS policy.'));
  },
  credentials: true,
}));
app.use(express.json({ limit: '1mb' }));
app.use(cookieParser());

app.get('/', (req, res) => {
  res.json({ message: 'Portfolio API is running', resources: ['/api/blogs', '/api/certificates', '/api/skills', '/api/projects', '/api/experiences', '/api/educations', '/api/messages'] });
});
app.get('/api/health', (req, res) => {
  const connected = mongoose.connection.readyState === 1;
  return res.status(connected ? 200 : 503).json({ status: connected ? 'ok' : 'unavailable', database: connected ? 'connected' : 'disconnected' });
});
app.use('/api/admin', adminSessionRoutes);
app.use('/api/messages', contactMessageRoutes);
app.use('/api/blogs', blogRoutes);
app.use('/api/certificates', certificateRoutes);
app.use('/api/skills', skillRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/experiences', experienceRoutes);
app.use('/api/educations', educationRoutes);

app.use((req, res) => res.status(404).json({ error: 'API endpoint not found.' }));
app.use((error, req, res, next) => {
  if (res.headersSent) return next(error);
  if (error instanceof SyntaxError && error.status === 400 && 'body' in error) {
    return res.status(400).json({ error: 'Request body must be valid JSON.' });
  }
  console.error(error);
  return res.status(500).json({ error: 'The server could not complete this request.' });
});

async function start() {
  await connectToMongoDB();
  await Promise.all(collections.map((collection) => collection.ensureStorage()));
  await new Promise((resolve, reject) => {
    const server = app.listen(port);
    const onError = (error) => {
      server.removeListener('listening', onListening);
      reject(error);
    };
    const onListening = () => {
      server.removeListener('error', onError);
      server.on('error', (error) => {
        console.error('Portfolio API server error:', error.message);
        process.exitCode = 1;
      });
      console.log(`Portfolio API listening on port ${port}`);
      resolve();
    };

    server.once('error', onError);
    server.once('listening', onListening);
  });
}

start().catch((error) => {
  const message = error.code === 'EADDRINUSE'
    ? `Port ${port} is already in use. Stop the other backend process or set a different PORT in backend/.env.`
    : error.message;
  console.error('Portfolio API could not start:', message);
  mongoose.disconnect().catch((disconnectError) => {
    console.error('Could not close the MongoDB connection after startup failed:', disconnectError.message);
  }).finally(() => {
    process.exitCode = 1;
  });
});
