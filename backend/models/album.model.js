import mongoose from "mongoose";

const albumSchema =new mongoose.Schema({
    title: { type: String, required: true },
    artist: { type: String, required: true },
    imageUrl: { type: String, required: true },
    releaseYear: { type: Number, required: true }, // Fixed typo from 'duraion' to 'duration'
    songs: [{ type: mongoose.Schema.Types.ObjectId,ref:"Song" }]
}, { timestamps: true }); // Add timestamps option here


export const Aibum=mongoose.model("Album",albumSchema)