import mongoose from "mongoose";

// Access the MongoDB URI from environment variables
const MONGO_URI = process.env.MONGO_URI;

let isConnected = false; // Track connection status

async function connectToDB() {
  if (isConnected) {
    console.log("Already connected to the database.");
    return;
  }

  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    isConnected = true;
    console.log("Database connected successfully.");
  } catch (e) {
    console.error("Error connecting to the database:", e.message);
  }
}

export default connectToDB;
