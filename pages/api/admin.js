

import { response } from "express";
import db from "../../lib/mongodb";
import Booking from "../../lib/Schema/bookingSchema";

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
}