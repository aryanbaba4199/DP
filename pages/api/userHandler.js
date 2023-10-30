import ConnectDB from "../../lib/mongodb";
import User from "../../lib/Schema/userSchema";

ConnectDB();

export default async function handler(req, res) {
  let messagecode = req.body.messagecode;

  {
    /* _______________User sign up ________________ */
  }

  if (req.method === "POST" && messagecode === "signup") {
    try {
      const { name, email, password } = req.body;
      const newUser = new User({
        name: name,
        email: email,
        password: password,
      });
      
      await newUser.save();
      console.log("user saved ", newUser.toObject());
      res.status(201).json({ message: "success" });
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
