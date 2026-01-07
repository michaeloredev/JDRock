// app/api/contact/route.js

export const runtime = 'nodejs';

import nodemailer from 'nodemailer';

export async function POST(request) {

console.log("CONTACT: hit route"); // 👈 ADD

  try {
    const body = await request.json();

    console.log("CONTACT: parsed body"); // 👈 ADD

    // Destructure the data from the request body
    const { name, email, phone, questions } = body;

    console.log("CONTACT: creating transporter"); // 👈 ADD

    // Create a Nodemailer transporter using SMTP (you can also use other transport methods)
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST, // e.g., 'smtp.gmail.com' for Gmail
      port: 465, // or 465 for SSL
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER, // your email address
        pass: process.env.EMAIL_PASS, // your email password or app-specific password
      },
    });


    console.log("CONTACT: about to send"); // 👈 ADD

    // Set up email data
    const mailOptions = {
      from: `"Website Contact" <${process.env.EMAIL_USER}>`,
      replyTo: email,
      to: process.env.EMAIL_TO, // list of receivers (could be your email)
      subject: 'New Contact Form Submission', // Subject line
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Message: ${questions}
      `, // plain text body
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong><br/>${questions}</p>
      `, // HTML body
    };

    // Send mail with defined transport object
    await transporter.sendMail(mailOptions);

    console.log("CONTACT: sent"); // 👈 ADD

    return new Response(JSON.stringify({ message: 'Email sent successfully' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(JSON.stringify({ error: 'Error sending email' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
