import mongoose from "mongoose";

const connectDB = async () => {
    try {
        if (mongoose.connections[0].readyState) return;
        await mongoose.connect("mongodb://localhost:27017/meta_crm");
        console.log("Database connected ...");
    } catch (err) {
        console.log(err);
    }
}

export default connectDB;