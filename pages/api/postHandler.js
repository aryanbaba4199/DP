import connectDB from '../../lib/mongodb'
import Post from '../../lib/Schema/postSchema'

connectDB();

export default async function handler(req, res){
    
    //__________Creating Post ________
    if(req.method === 'POST'){
        const imageUrl = req.body.imageUrl;
        
        const header = req.body.header;
        const description = req.body.description;

        console.log(header, description, imageUrl);
        
        try{
            const newPost = new Post({imageUrl, header, description});
            await newPost.save();
            console.log("post created successfully");
            res.status(200).json({messsage : "success"});
        }
        catch(e){

            console.log(e.message);
            res.status(500).json({message : "error"});
        }
    }


    //___________Showing Posts___________
    if(req.method === 'GET'){
        try{
            const postData = await Post.find();
            
            res.status(200).json(postData);
        }
        catch(err){
            console.error(err);
        }
    }


    //___________Delete Posts___________
    const postID = req.query.did;
    if(req.method === "DELETE"){
        try{
            await Post.findByIdAndDelete(postID);
            res.status(200).json({message: 'Deleted'})
        }
        catch(err){
            console.log(err.message);
        }
    }
}