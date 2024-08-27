// pages/api/contact.ts

import { NextApiRequest, NextApiResponse } from 'next';
import { mailSend } from '../../lib/mail'; // Import the mailSend function

const sendSubscribeFromAPI = async (email: string) => {
  const location = 'Moss Dekk AS';

  if (email) {
    const body = `
      <html>
        <head></head>
        <body>
          Hey, <br>
          I want to subscribe: ${email}.
          <br><br>
        </body>
      </html>
    `;

    const emailDetails = {
      to: 'smart.topdev929@gmail.com', // The recipient
      toName: 'Subscribe',
      subject: 'Please Answer to me',
      body: body,
      location: location,
    };

    const mailSuccessful = await mailSend(emailDetails);

    if (mailSuccessful) {
      return 'Subscription request submitted.';
    } else {
      throw new Error('Failed to send subscription email.');
    }
  } else {
    throw new Error('Email cannot be empty.');
  }
};

// API route handler
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const input = req.body;
      if (input.action === 'sendSubscribe') {
        const { subscribemail } = input.payload;
        const result = await sendSubscribeFromAPI(subscribemail || '');
        res.status(200).json({ message: result });
      } else {
        res.status(400).json({ error: 'Invalid action.' });
      }
    } catch (error) {
      res.status(500).json({ error: (error as Error).message });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
