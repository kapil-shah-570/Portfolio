const ContactMessage = require('../models/contactMessageModel');
const mongoose = require('mongoose');
const { sendContactNotification } = require('../services/contactEmail');

const exportFields = [
  ['Name', 'name'],
  ['Email', 'email'],
  ['Subject', 'subject'],
  ['Message', 'message'],
  ['Email notification', 'emailNotification'],
  ['Received at', 'createdAt'],
];

function csvCell(value) {
  const text = String(value ?? '').replace(/[\r\n]+/g, ' ');
  const safeText = /^[\t ]*[=+\-@]/.test(text) ? `'${text}` : text;
  return `"${safeText.replace(/"/g, '""')}"`;
}

function validateMessage(payload) {
  if (!payload || typeof payload !== 'object' || Array.isArray(payload)) {
    return 'A valid contact message is required.';
  }
  const name = typeof payload.name === 'string' ? payload.name.trim() : '';
  const email = typeof payload.email === 'string' ? payload.email.trim() : '';
  const subject = typeof payload.subject === 'string' ? payload.subject.trim() : '';
  const message = typeof payload.message === 'string' ? payload.message.trim() : '';

  if (!name || name.length > 120) return 'Name is required and must be 120 characters or fewer.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 254) return 'Enter a valid email address.';
  if (subject.length > 200 || /[\r\n]/.test(subject)) return 'Subject must be 200 characters or fewer and contain no line breaks.';
  if (!message || message.length > 10000) return 'Message is required and must be 10,000 characters or fewer.';
  return { name, email, subject, message };
}

async function create(req, res, next) {
  const validated = validateMessage(req.body);
  if (typeof validated === 'string') return res.status(400).json({ error: validated });

  try {
    const savedMessage = await ContactMessage.create(validated);
    let notificationStatus = 'failed';
    try {
      notificationStatus = await sendContactNotification(savedMessage);
    } catch (error) {
      console.error('Contact message was saved, but its email notification could not be delivered.', error);
    }

    try {
      await ContactMessage.updateOne({ _id: savedMessage._id }, { $set: { emailNotification: notificationStatus } });
    } catch (error) {
      console.error('Contact message was saved, but its email notification status could not be updated.', error);
    }
    return res.status(201).json({
      message: 'Your message has been saved.',
      emailNotification: notificationStatus,
    });
  } catch (error) {
    return next(error);
  }
}

async function list(req, res, next) {
  try {
    const messages = await ContactMessage.find()
      .sort({ createdAt: -1, _id: -1 })
      .lean();
    return res.json(messages);
  } catch (error) {
    return next(error);
  }
}

async function exportCsv(req, res, next) {
  try {
    const messages = await ContactMessage.find()
      .sort({ createdAt: -1, _id: -1 })
      .lean();
    const rows = [
      exportFields.map(([label]) => csvCell(label)).join(','),
      ...messages.map((message) => exportFields
        .map(([, key]) => csvCell(key === 'createdAt' && message[key]
          ? new Date(message[key]).toISOString()
          : message[key]))
        .join(',')),
    ];

    res.set({
      'Content-Type': 'text/csv; charset=utf-8',
      'Content-Disposition': 'attachment; filename="portfolio-contact-messages.csv"',
      'Cache-Control': 'no-store',
    });
    return res.send(`\uFEFF${rows.join('\r\n')}`);
  } catch (error) {
    return next(error);
  }
}

async function remove(req, res, next) {
  if (!mongoose.isValidObjectId(req.params.id)) {
    return res.status(400).json({ error: 'Invalid contact message ID.' });
  }
  try {
    const deleted = await ContactMessage.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: 'Contact message not found.' });
    return res.status(204).end();
  } catch (error) {
    return next(error);
  }
}

module.exports = { create, list, exportCsv, remove };
