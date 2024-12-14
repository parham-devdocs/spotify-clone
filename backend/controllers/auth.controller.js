import { User } from "../models/user.model.js"

export const authController=async (req, res) => {
  try {
    const { id, firstName, lastName, imageUrl } = req.body
    const user =await User.findOne({ clerkId: id })
    if (!user) {
      // SignUp
    await  User.create({clerkId:id,imageUrl,fullName:`${firstName} ${lastName}`})
      return res.status(200).json({success:true})
      }
      return res.status(422).json({message:"User already exists",success:false})
 } catch (error) {
    console.log("Error in the callback", error)
    res.status(500).json({message:"Internal Server Error"})
 }
}
