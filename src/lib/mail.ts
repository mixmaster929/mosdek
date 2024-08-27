import nodemailer, {SendMailOptions } from 'nodemailer';

interface MailDetails {
  to: string;
  toName: string;
  subject: string;
  body: string;
  location: string;
  pdf?: { source: string; name: string }; // optional attachment object
}

export const mailSend = async (details: MailDetails) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.proisp.no', // SMTP server
    port: 25, // Port number to connect
    secure: false, // Use TLS if available
    auth: {
      user: 'post@mossdekk.no', // SMTP username
      pass: 'qvG0I%n_E($t', // SMTP password
    },
  });

  const mailOptions: SendMailOptions = {
    from: details.location === 'Mutto' ? 
      '"MUTTO - Mobility Service" <post@mutto.no>' : 
      '"MossDekk - Dekkhotell" <post@mossdekk.no>', // Sender address
    to: details.to,
    subject: details.subject,
    html: details.body, // HTML body
  };

  if (details.pdf) {
    mailOptions.attachments = [
      {
        filename: details.pdf.name,
        path: details.pdf.source, // path to the file
        contentType: 'application/pdf',
      },
    ];
  }

  try {
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
    return true; // Indicate success
  } catch (error) {
    console.error('Error sending email:', error);
    return false; // Indicate failure
  }
};
