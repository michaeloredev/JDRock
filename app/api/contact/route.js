// app/api/contact/route.js

export const runtime = 'nodejs';

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

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.EMAIL_TO?.split(',').map((address) => address.trim()).filter(Boolean);
  if (!apiKey || !to?.length) {
    console.error('Contact form is not configured: set RESEND_API_KEY and EMAIL_TO');
    return json({ error: 'Error sending email' }, 500);
  }

  try {
    // Resend's HTTP API (DigitalOcean blocks outbound SMTP from the droplet).
    // The from address must be on a domain verified in Resend (jdrock.com).
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: process.env.EMAIL_FROM || 'J.D. Rock Website <website@jdrock.com>',
        to,
        reply_to: email,
        subject: `New Contact Form Submission from ${name.replace(/[\r\n]+/g, ' ')}`,
        text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage:\n${questions}`,
        html: `
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
          <p><strong>Message:</strong><br/>${escapeHtml(questions).replace(/\n/g, '<br/>')}</p>
        `,
      }),
      signal: AbortSignal.timeout(15000),
    });

    if (!response.ok) {
      console.error('Error sending email:', response.status, await response.text());
      return json({ error: 'Error sending email' }, 500);
    }

    return json({ message: 'Email sent successfully' }, 200);
  } catch (error) {
    console.error('Error sending email:', error);
    return json({ error: 'Error sending email' }, 500);
  }
}
