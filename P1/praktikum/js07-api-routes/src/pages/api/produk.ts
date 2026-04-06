// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { retrieveProducts } from '../utils/db/servicefirebase';

// Tipe respons API (lebih fleksibel karena data dari Firestore bisa bervariasi)
type Data = {
  status: boolean;
  status_code: number;
  data: any;
};

// Handler perlu menjadi async karena retrieveProducts adalah async function
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  // Ambil data dari Firestore collection 'products'
  const data = await retrieveProducts('products');

  // Kirim response JSON
  res.status(200).json({ status: true, status_code: 200, data });
}
