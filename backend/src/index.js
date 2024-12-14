import express from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";
import statisticsRoutes from "./routes/statistics.route.js";
import albumRoutes from "./routes/album.route.js";
import songRoutes from "./routes/songs.route.js";
import adminRoutes from "./routes/admin.route.js";
import {clerkMiddleware, getAuth } from "@clerk/express";
import { connectDb } from "../lib/db.js";
import cors from "cors";
dotenv.config();
const PORT = process.env.PORT;
const app = express();

app.use(cors());

app.use(express.json());
app.use(clerkMiddleware())


app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/songs", songRoutes);
app.use("/api/albums", albumRoutes);
app.use("/api/stats", statisticsRoutes);

app.listen(PORT, () => {
  console.log("listening on port 5000");
  connectDb();
});
