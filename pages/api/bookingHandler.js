import connectDB from "../../lib/mongodb"
import bkSchema from "../../lib/Schema/bookingSchema"


connectDB();
export default async function handler(req, res){
    const messagecode = req.body.messagecode;

    {/*_________________Creating Bookings ______________ */}
    if(req.method === "POST" && messagecode === "createbooking"){
       const bookingData = req.body.bookingData;
       
       try{
        const booking = new bkSchema(bookingData);
        await booking.save();
        
        res.status(200).json({message : "Booking saved"});
       }catch(e){
        console.log(e);
        res.status(500).json({message : "booking error"});
       }
    }


    {/* _________ Showing User Booking Data____________ */}
    const email = req.query.email;
    const bookingmessagecode = req.query.messagecode;
    if(req.method === "GET" && bookingmessagecode==="userbookingdata"){
        try{
        const userbkdata = await bkSchema.find({email});
        res.status(200).json(userbkdata);
        }catch(e){
            console.log(e);
        }

    }
    



    {/* ___________Deleting Booking Data__________ */}
    const id = req.query.did;
    
        
    if(req.method==="DELETE"){
        try{
             await bkSchema.findByIdAndDelete(id);
             res.status(200).json({message : "deleted"});   
        }
        catch(err){
            console.log(err);
        }
    }


}
