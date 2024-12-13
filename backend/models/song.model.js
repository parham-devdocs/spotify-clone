import mongoose from "mongoose";

const songSchema =new mongoose.Schema({
    title: { type: String, required: true },
    artist: { type: String, required: true },
    imageUrl: { type: String, required: true },
    audioUrl: { type: String, required: true },
    duration: { type: Number, required: true }, // Fixed typo from 'duraion' to 'duration'
    albumId: { type: mongoose.Schema.Types.ObjectId,ref:Album, required: false }
}, { timestamps: true }); // Add timestamps option here


export const Song=mongoose.model("Song",songSchema)