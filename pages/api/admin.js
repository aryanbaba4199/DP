

import { response } from "express";
import db from "../../lib/mongodb";
import Booking from "../../lib/Schema/bookingSchema";
import { request } from "http";

export default async function handler(req, res){
    db();
    if(req.method === "GET"){
        
        try {
            const bkData = await Booking.find();
            
            res.status(200).json(bkData);
        } catch (error) {
            console.log(error);
        }
    }
    else if (req.method === 'DELETE') {
        const {id} = req.query;
        try{
            const deleteOrder = await Booking.findByIdAndDelete(id);
            res.status(200).json({message: "Successfully Deleted Order"});
        }catch (error) {
            console.log(error);
        }
    }
    else if (req.method === "PUT") {
    try {
      const updatedData = await Booking.findByIdAndUpdate(id, req.body, {
        new: true, // Return the modified document rather than the original
        runValidators: true, // Run validators to ensure updated data is valid
      });

      res.status(200).json(updatedData);
    } catch (error) {
      console.error('Error updating data:', error.message);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}