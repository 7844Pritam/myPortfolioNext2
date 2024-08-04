import mongoose from "mongoose";
import dynamic from "next/dynamic";

async function connectToDB() {
    try {
        await mongoose.connect("mongodb+srv://pritamsharma7844:Portfolio7844@portfolione.exrzxup.mongodb.net/your-database-name", {

        });
        console.log("Database connected successfully.");
    } catch (e) {
        console.error("Error connecting to the database:", e.message);
    }
}
export default dynamic (() => Promise.resolve(connectToDB), {ssr: false})
