const mongoose = require("mongoose");
const { hashPassword } = require("../utils/convertPassword");
const User = require("../models/User");
require("./dotenvConfig"); // Make sure this correctly loads your .env file

const MONGO_URI = process.env.MONGO_URI;

const connectMongoDB = async () => {
  try {
    if (!MONGO_URI) {
      throw new Error("Missing MONGO_URI in environment variables!");
    }

    // Optional settings to avoid deprecation warnings and improve connection handling
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    const hashedPassword = await hashPassword(process.env.PASSWORD);
    const checkUser = await User.findOne({
      email: process.env.EMAIL,
    });
    if (!checkUser) {
      const user = new User({
        username: process.env.USERNAME,
        password: hashedPassword,
        email: process.env.EMAIL,
      });
      await user.save();
    }
    
    
  } catch (error) {
    console.error("❌ MongoDB connection error:", error.message);
    process.exit(1); // Exit the process if DB connection fails
  }
};

// Optional: close connection on app shutdown


module.exports = { connectMongoDB };
