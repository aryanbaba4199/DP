import connectDB from "../../lib/mongodb"
import BkSchema from "../../lib/Schema/bookingSchema"
import Mail from "../../lib/Schema/mail"
import nodemailer from "nodemailer";






export default async function handler(req, res){
    connectDB();
    
    const messagecode = req.body.messagecode;

    {/*_________________Creating Bookings ______________ */}
    if(req.method === "POST" && messagecode === "createbooking"){
       const name = req.body.name;
       const email = req.body.email;
       const address = req.body.address;
       const mobile = req.body.mobile;
       const selectedServices = req.body.selectedServices;
       const selectedFunctionType = req.body.selectedFunctionType;
       const msg = req.body.msg;
       const time = req.body.time;
       const status = req.body.status;
       const pid = req.body.pid;
       const budget = req.body.budget;
       const expenditures = req.body.expenditures;
       

       
       
       
       try{
        const booking = new BkSchema({
            name,
            email,
            address,
            mobile,
            selectedServices,
            selectedFunctionType,
            msg,
            time,
            status,
            pid,
            budget,
            expenditures
        });
        console.log(booking);
        
        
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
            name = ${name}
            email = ${email}
            address = ${address}
            mobile = ${mobile}}
            paymentId = ${pid}
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
    const bookingmessagecode = req.query.messagecode;
    
    if(req.method === "GET" && bookingmessagecode==="userbookingdata"){
    
        const email = req.query.email;
        console.log(email);
    
        try{
            const userbkdata = await BkSchema.find({ email }).maxTimeMS(30000);
        res.status(200).json(userbkdata);
        }catch(e){
            console.log(e);
        }

    }
    



    {/* ___________Deleting Booking Data__________ */}
    
    
        
    if(req.method==="DELETE"){
        const id = req.query.did;
        console.log(id);
        try{
             await BkSchema.findByIdAndDelete(id);
             res.status(200).json({message : "deleted"});   
        }
        catch(err){
            console.log(err);
        }
    }


}
