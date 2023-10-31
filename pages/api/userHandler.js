import ConnectDB from "../../lib/mongodb";
import User from "../../lib/Schema/userSchema";

ConnectDB();

export default async function handler(req, res) {
  let messagecode = req.body.messagecode;
  

  {
    /* _______________User sign up ________________ */
  }
  

  if (req.method === "POST" && messagecode === "userprofile") {
    
    
    try {
      const user = req.body.user;
      const useremail = req.body.user.email;
      
       const userexist = await User.find({ email : useremail});
       
      if (userexist.length=== 0) {
        const newUser = new User({
          name: user.name,
          email: user.email,
          image : user.image,
        });
        
        await newUser.save();
        console.log("user saved ", newUser.toObject());
        res.status(200).json({ message: "success" });
      }
      else{
        console.log("no");
        res.status(404).json({ message: "user exists" });
      }
      

    
    } catch (err) {
      console.log("Error is : ", err);
      res.status(500).json({ message: err.message });
    }
  }

  {
    /* ______________User Signing in_________________________ */
   
  }
  if (req.method === "POST" && messagecode === "signin") {
    const { email, password } = req.body;
    try {
      const user = await User.find({ email: email });
      console.log(user);
      if (password === user[0].password) {
        let name = user[0].name;
        res
          .status(200)
          .json({ message: "Authentication successful", name, email });
      } else {
        res.status(403).json({ message: "password not correct" });
        console.log("password is not correct");
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
      res.status(500).json({ error: "An error occurred" });
    }
  }
}
