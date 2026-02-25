import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config()

const connectdb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("MongoDB Connected sucsesfully");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};

export default connectdb