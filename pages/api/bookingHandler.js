import connectDB from "../../lib/mongodb"
import bkSchema from "../../lib/Schema/bookingSchema"
import Mail from "../../lib/Schema/mail"
import nodemailer from "nodemailer";


connectDB();

export default async function handler(req, res){
    const messagecode = req.body.messagecode;

    {/*_________________Creating Bookings ______________ */}
    if(req.method === "POST" && messagecode === "createbooking"){
       const bookingData = req.body.bookingData;
       
       
       
       try{
        const booking = new bkSchema(bookingData);
        
        await booking.save();


        // ---------Sending mail to admin --------------------
        const transporter = nodemailer.createTransport({
            service : "Gmail",
            auth : {
                user: process.env.FROM_EMAIL_ADDRESS,
                pass: process.env.FROM_EMAIL_PASS,
            }
        })
        const mailOption = {
            from : process.env.FROM_EMAIL_ADDRESS,
            to : process.env.TO_EMAIL_PASS,
            subject : "Dream Planner Booking",
            text : `
            name = ${bookingData.name}
            email = ${bookingData.email}
            address = ${bookingData.address}
            mobile = ${bookingData.mobile}
            id = ${booking._id}
            link = ${`htpps://dreamplanner.in/api/accounting?id=${booking._id}`}
            `
            
        };
        await transporter.sendMail(mailOption);
            const mail = await Mail.create(req.body)
            
        
        
        res.status(200).json({success: true, message: "Booking Created Successful", mail});
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
