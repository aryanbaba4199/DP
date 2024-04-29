import mongoose from "mongoose";


const connectDB = async () => {
  const uri : any = process.env.MONGODB_URI
  try {
    const conn = await mongoose.connect(uri);

    console.log(`Connected to Database : `);
  } catch (error) {
    console.log('heloo')
    console.error(`Error connecting to MongoDB: ${error}`);
  }
};

export default connectDB;