import mongoose from "mongoose";


const message =new mongoose.Schema({
  senderId: { type: String, required: true },
  receiverId: { type: String, required: true },
  content: { type: String, required: true },
},{timestamps:true});