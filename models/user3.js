import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const user3Schema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
},
    { timestamps: true }
)

export default mongoose.models.User3 || mongoose.model("user3", user3Schema);