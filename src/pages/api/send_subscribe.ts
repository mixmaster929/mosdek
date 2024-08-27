import { NextApiRequest, NextApiResponse } from 'next';
import { mailSend } from '../../lib/mail';

const sendSubscribeFromAPI = async (email: string, res: NextApiResponse) => {
  const location = 'Moss Dekk AS';

  if (!email) {
    return res.status(400).json({ status: 'failed', message: 'Email cannot be empty.' });
  }

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

  const receiveEmail = process.env.RECEIVE_EMAIL;
  if (!receiveEmail) {
    return res.status(500).json({ status: 'failed', message: 'Receive email is not defined.' });
  }

  const emailDetails = {
    to: receiveEmail,
    toName: 'Subscribe',
    subject: 'Please Answer to me',
    body: body,
    location: location,
  };

  const mailSuccessful = await mailSend(emailDetails);

  if (mailSuccessful) {
    return res.status(200).json({ message: 'Subscription request submitted.' });
  } else {
    return res.status(500).json({ status: 'failed', message: 'Failed to send subscription email.' });
  }
};

// API route handler
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const input = req.body;
      if (input.action === 'sendSubscribe') {
        const { subscribemail } = input.payload;
        await sendSubscribeFromAPI(subscribemail || '', res);
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
