const nodemailer = require('nodemailer');

function isConfigured() {
  return Boolean(process.env.MAIL_USER && process.env.MAIL_PASSWORD && (process.env.CONTACT_EMAIL || process.env.ADMIN_EMAIL));
}

async function sendContactNotification(message) {
  if (!isConfigured()) return 'not_configured';

  const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST || 'smtp.gmail.com',
    port: Number(process.env.MAIL_PORT) || 465,
    secure: (Number(process.env.MAIL_PORT) || 465) === 465,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASSWORD,
    },
  });

  await transporter.sendMail({
    from: process.env.MAIL_FROM || process.env.MAIL_USER,
    to: process.env.CONTACT_EMAIL || process.env.ADMIN_EMAIL,
    replyTo: message.email,
    subject: `Portfolio contact: ${message.subject || `Message from ${message.name}`}`,
    text: [
      `Name: ${message.name}`,
      `Email: ${message.email}`,
      `Subject: ${message.subject || '(not provided)'}`,
      '',
      message.message,
    ].join('\n'),
  });
  return 'sent';
}

module.exports = { sendContactNotification };
