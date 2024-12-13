import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    requierd: true,
  },
  imageUrl: {
    type: String,
    requierd: true,
    },
    clerkId: {
        type: String,
        requierd: true,
        unique:true
  }
},{timestamps:true});


export const User=mongoose.model("User",userSchema)