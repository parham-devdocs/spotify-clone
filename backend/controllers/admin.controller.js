
import aws from "@aws-sdk/client-s3";
export const GetAdmin = (req, res) => {
    res.send("Admin here")
}


export const createSong =async (req, res) => {
    const { PutObjectCommand } = aws
    try {
        const file = req.file
        console.log(file)
    if (!file) {
        console.log("song is not selected")
        return res.status(400).json({message:"select a song"})
        }
        console.log("file recieved")
        return res.status(201).json({message:"song selected "})
  } catch (error) {
    console.log(error)
  }
};