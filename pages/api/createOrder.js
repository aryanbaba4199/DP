import { getSession } from 'next-auth/react';
import Razorpay from 'razorpay';

export default async (req, res) => {
  const rzrKey = process.env.RAZORPAY_KEY_ID;
  const rzrSecret = process.env.RAZORPAY_KEY_SECRET;

  if (req.method === 'POST') {
    try {
      const session = await getSession({ req });

      // Replace 'YOUR_KEY_ID' and 'YOUR_SECRET' with your actual Razorpay API key and secret
      const instance = new Razorpay({
        key_id: rzrKey,
        key_secret: rzrSecret,
      });

      // Fetch amount from the request body
      const { amount } = req.body;

      // Create an order
      const order = await instance.orders.create({
        amount,
        currency: 'INR',
        receipt: 'Dream Planner',
        notes: {
          key1: 'budget',
          key2: 'value2',
        },
      });

      res.status(200).json({ orderId: order.id });
    } catch (error) {
      console.error(error);
      res.status(500).end('Server Error');
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end('Method Not Allowed');
  }
};
