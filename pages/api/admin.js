import db from "../../lib/mongodb";
import Booking from "../../lib/Schema/bookingSchema";

export default async function handler(req, res) {
  db();

  if (req.method === "GET") {
    try {
      const bkData = await Booking.find();
      res.status(200).json(bkData);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else if (req.method === "DELETE") {
    const { id } = req.query;
    try {
      const deleteOrder = await Booking.findByIdAndDelete(id);
      res.status(200).json({ message: "Successfully Deleted Order" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else if (req.method === "PUT") {
    const { id } = req.query; // Add this line to get the id from the query parameters
    try {
      const updatedData = await Booking.findByIdAndUpdate(id, req.body, {
        new: true,
        runValidators: true,
      });

      res.status(200).json(updatedData);
    } catch (error) {
      console.error("Error updating data:", error.message);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
}
