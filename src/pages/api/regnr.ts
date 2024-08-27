// pages/api/regnr.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { RowDataPacket } from 'mysql2';
import { getDbConnection } from '../../lib/db';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { inputLicensplate } = req.body;
  if (!inputLicensplate) {
    return res.status(400).json({ message: 'License plate is required' });
  }

  const value = inputLicensplate.toUpperCase();
  const pattern = /^[A-Z]{2}[0-9]{5}$/;

  if (!pattern.test(value)) {
    return res.status(400).json({ message: 'Invalid license plate format' });
  }

  try {
    // Request to external API
    const apiResponse = await fetch('http://autobutler.no/dekkhotell/query_mossdekk.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ value }),
    });
    // console.log("apiResponse=>", apiResponse);
    
    // const apiData = await apiResponse.json();

    if (apiResponse.status === 200) {
      const connection = await getDbConnection();
      const [rows]: [RowDataPacket[], any] = await connection.execute(
        `SELECT fullName, location, price FROM shop_customers WHERE location = 'Moss Dekk AS' AND regNr LIKE ?`,
        [`%${value}%`]
      );
      
      connection.end();

      if (rows.length > 0) {
        const customer = rows[0];
        return res.status(200).json({
          fullName: customer.fullName,
          location: customer.location,
          price: customer.price,
        });
      } else {
        return res.status(404).json({ message: 'No customer found for this license plate' });
      }
    } else {
      return res.status(400).json({ message: 'Invalid license plate' });
    }
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

export default handler;
