import { NextApiRequest, NextApiResponse } from 'next';
import { mailSend } from '../../lib/mail';
import { getDbConnection } from '../../lib/db';

const saveContact = async (contactData: any) => {
  const { name, email, phone, sub, msg, regNr, location } = contactData;
  const date = new Date().toISOString().slice(0, 19).replace('T', ' '); // Format as 'YYYY-MM-DD HH:mm:ss'

  const connection = await getDbConnection();

  try {
    // Insert data into shop_contact table
    const result = await connection.execute(
      'INSERT INTO shop_contact (date, name, email, phone, subject, message, reg_nr, location) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
      [date, name, email, phone, sub, msg, regNr, location]
    );

    return { success: true, date };
  } finally {
    await connection.end();
  }
};

// API handler
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const {
      name,
      email,
      phone,
      sub,
      msg,
      regNr,
      location,
    } = req.body;

    if (!name || !email || !phone || !sub || !msg || !regNr) {
      return res.status(400).json({ status: 'failed', message: 'Empty fields' });
    }

    try {
      // Save contact data to the database
      const saveResult = await saveContact(req.body);

      if (saveResult.success) {
        const today = new Date().toISOString().slice(0, 19).replace('T', ' ');

        // Prepare email body
        const body = `
          <html>
            <head></head>
            <body>
              Hey ${name}, <br>
              I have some queries about this platform. <br><br>
              Details of Query are:<br>
              Reg Nr: <b>${regNr}</b><br>
              Additional Services: <br>
              Date & Time of tyre change: <b>${saveResult.date}</b><br>
              Query date: <b>${today}</b><br>
              Query: <b><p>${msg}</p></b><br>
            </body>
          </html>
        `;
        
        const receiveEmail = process.env.RECEIVE_EMAIL;
        if (!receiveEmail) {
          return res.status(500).json({ status: 'failed', message: 'Receive email is not defined.' });
        }
        
        const emailParams = {
          to: receiveEmail,
          toName: name,
          subject: 'Please Answer to me',
          body: body,
          location: location,
        };
  
        await mailSend(emailParams);

        return res.status(200).json({ status: 'success', message: 'Email sent' });
      } else {
        return res.status(500).json({ status: 'failed', message: 'Database insertion failed.' });
      }
    } catch (error) {
      console.error(error);
      return res.status(500).json({ status: 'failed', message: 'Error occurred: '});
    }
  }
}