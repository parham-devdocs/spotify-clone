import mongoose from "mongoose"

export const connectDb=async function () {
    try {
        const conn = await mongoose.connect(process.env.MONGO_DB_URL);
        console.log(   `connected to ${conn.connection.host}`)
    } catch (error) {
                console.log("not connected ");

        process.exit(1)
    }
}