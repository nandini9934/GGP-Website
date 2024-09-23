import mongoose from "mongoose";

const user4Schema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
},
    { timestamps: true }
)

export default mongoose.models.User4 || mongoose.model("user4", user4Schema);