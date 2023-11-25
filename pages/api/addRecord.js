// pages/api/admin/addRecord.js
import connectDB from "../../lib/mongodb";
import Booking from "../../lib/Schema/bookingSchema";

connectDB();

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { id, expenditureName, expenseAmount } = req.body;

    try {
      const booking = await Booking.findById(id);

      if (!booking) {
        return res.status(404).json({ message: "Booking not found" });
      }

      // Ensure expenditures field is initialized as an array
      if (!booking.expenditures) {
        booking.expenditures = [];
      }

       booking.expenditures.push({ expenditureName, expenseAmount });
     
      const d = await booking.save();
      console.log(d);

      res.status(200).json({ success: true, message: "Record added successfully" });
    } catch (error) {
      console.error("Error adding record:", error.message);
      res.status(500).json({ message: "Internal server error" });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
