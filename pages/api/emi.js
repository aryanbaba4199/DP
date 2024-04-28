import { LocationCity } from '@mui/icons-material';
import EmiUser from '../../lib/Schema/emi'
import db from '../../lib/mongodb'
import nodemailer from "nodemailer";
export default async function handler(req, res) {
    db();
    if (req.method === 'POST') {
        
       const  name = req.body.name;
        const gender = req.body.gender;
        const dob = req.body.dob;
        const mobile = req.body.mobile;
        const email = req.body.email;
        const empl = req.body.empl;
        const sallary = req.body.sallary;
        const amount = req.body.amount;
        const city = req.body.city;
        const country = req.body.country;
        const state = req.body.state;
        const pin = req.body.pin;
        const pan = req.body.pan;
        const aadhar = req.body.aadhar;
        console.log(name, gender);
        try {
            const emiUser = new EmiUser({
                name,
                gender,
                dob,
                mobile,
                email,
                empl,
                sallary,
                amount,
                city,
                country,
                state,
                pin,
                pan,
                aadhar,
            });
             await emiUser.save();
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
                subject : "Dream Planner EMI Inquiry",
                text : `
                name = ${name}
                gender = ${gender},
                dob = ${dob},
                mobile = ${mobile},
                email = ${email},
                employeement = ${empl},
                sallary = ${sallary},
                amount = ${amount},
                city = ${city},
                country = ${country},
                state = ${state},
                pin = ${pin},
                pan = ${pan},
                aadhar = ${aadhar},
                
                `     
            };
            await transporter.sendMail(mailOption);

            console.log('Emi form saved successfully');
            res.status(201).json({ message: 'Emi form Sent'});
        } catch (err) {
            console.log(err.message);
            res.status(500).json({ message: err.message });
        };

    }
}