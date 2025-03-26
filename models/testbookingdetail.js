import mongoose from "mongoose";

const testdetail = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    pincode: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    contact: {
      type: String,
      required: true,
    },
    appointmentTime: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    paymentStatus: {
      type: String,

    },
    paymentId: {
      type: String,
    },
    mailStatus: {
      type: String,

    },
  },
  { timestamps: true }
);

export default mongoose.models.testbookingdetails ||
  mongoose.model("testbookingdetails", testdetail);
