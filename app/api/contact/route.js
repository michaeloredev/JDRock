// app/api/contact/route.js

export const runtime = 'nodejs';

import nodemailer from 'nodemailer';

const escapeHtml = (value = '') =>
  String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

const json = (data, status) =>
  new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return json({ error: 'Invalid request' }, 400);
  }

  // Destructure the data from the request body
  const name = String(body?.name ?? '').trim();
  const email = String(body?.email ?? '').trim();
  const phone = String(body?.phone ?? '').trim();
  const questions = String(body?.questions ?? '').trim();

  if (!name || !email || !questions) {
    return json({ error: 'Name, email, and a message are required' }, 400);
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return json({ error: 'Please enter a valid email' }, 400);
  }

  try {
    // Gmail SMTP: EMAIL_PASS must be a Google App Password, not the account password
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: 587,
      secure: false, // STARTTLS on 587
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Website Contact" <${process.env.EMAIL_USER}>`,
      replyTo: email,
      to: process.env.EMAIL_TO,
      subject: `New Contact Form Submission from ${name.replace(/[\r\n]+/g, ' ')}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage:\n${questions}`,
      html: `
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
        <p><strong>Message:</strong><br/>${escapeHtml(questions).replace(/\n/g, '<br/>')}</p>
      `,
    });

    return json({ message: 'Email sent successfully' }, 200);
  } catch (error) {
    console.error('Error sending email:', error);
    return json({ error: 'Error sending email' }, 500);
  }
}
