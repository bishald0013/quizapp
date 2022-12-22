import mongoose from "mongoose";

export default async function connect() {
    await mongoose.connect(process.env.DATABASE_URL)
    console.log("Db connected successfully")
}