import mongoose from "mongoose";

const MONGO_URI =
  "mongodb+srv://pritamsharma7844:pritam7844@pritamportfolio.nz4himk.mongodb.net/my-data";

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
