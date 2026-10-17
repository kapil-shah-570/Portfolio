const { mongoose } = require('../services/mongodb');

const contactMessageSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true, maxlength: 120 },
  email: { type: String, required: true, trim: true, maxlength: 254 },
  subject: { type: String, trim: true, maxlength: 200, default: '' },
  message: { type: String, required: true, trim: true, maxlength: 10000 },
  emailNotification: { type: String, enum: ['pending', 'sent', 'failed', 'not_configured'], default: 'pending' },
}, { timestamps: true });

module.exports = mongoose.model('ContactMessage', contactMessageSchema);
