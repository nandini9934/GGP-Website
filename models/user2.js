import mongoose from "mongoose";

const user2Schema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    phoneno: {
      type: String,
      required: true,
    },
    mail: {
      type: String,
      required: true,
    },
    height: {
      type: String,
      required: true,
    },
    weight: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    brings: {
      type: String,
      required: true,
    },
    goals: {
      type: String,
      required: true,
    },
    achieve: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    stops: {
      type: String,
      required: true,
    },
    servings: {
      type: String,
      required: true,
    },
    grains: {
      type: String,
      required: true,
    },
    chicken: {
      type: String,
      required: true,
    },
    drink: {
      type: String,
      required: true,
    },
    sweets: {
      type: String,
      required: true,
    },
    medical: {
      type: String,
      required: true,
    },
    chronic: {
      type: String,
      required: true,
    },
    ill: {
      type: String,
      required: true,
    },
    physical: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models.User ||
  mongoose.model("LeadDetails", user2Schema);
