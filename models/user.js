import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: String,
    phoneno: String, 
    goals: String, 
    age: String,
    height: String, 
    weight: String, 
    gender: String, 
    blood: String, 
    sleeping: String
})

export default mongoose.models.User || mongoose.model("users", userSchema);