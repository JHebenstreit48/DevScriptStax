import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export const connectToDb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI as string);
    console.log("✅ Connected to MongoDB");
  } catch (err) {
    console.error("❌ MongoDB connection error:", err);
    process.exit(1);
  }
};
