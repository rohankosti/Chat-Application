import mongoose from "mongoose";

const connectdb = async () => {
  try {
    await mongoose.connect("mongodb://admin:admin123@127.0.0.1:27017/convoxa?authSource=admin");
    console.log("MongoDB Connected sucsesfully");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};

export default connectdb