import connectDB from "../../lib/mongodb";
import Booking from "../../lib/Schema/bookingSchema";

export default async function handler(req, res) {
  const { id } = req.query;

  connectDB();

  if (req.method === "GET") {
    try {
      const data = await Booking.findById(id);
      
      res.status(200).json(data);
    } catch (error) {
      console.error('Error:', error.message);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}
