import db from '../../lib/mongodb';
import Feedbackdata from '../../lib/Schema/feedbackSchema';

db();
export default async function handler(req,res){
    if(req.method=='POST'){
        try{
        const {name, email, rating, feedback} = req.body;
        console.log(name, email, rating);
        const newFeedback = new Feedbackdata({name, email, rating, feedback});
        await newFeedback.save();
        res.status(200).json({message : "Feedback saved successfully"});
        }catch(err){
            console.log(err.message);
        }
    }

    if (req.method === "GET") {
      try {
        const fdbkData = await Feedbackdata.find({ rating: { $gte: 3 } });
        res.status(200).json(fdbkData);
      } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Internal server error' });
      }
    }
    
      
}