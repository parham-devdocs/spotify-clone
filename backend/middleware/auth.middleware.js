import { clerkClient } from "@clerk/express";

export const protectedRoute =async (req,res,next) => {
    if (!req.auth.userId) {
        console.log(req.auth)
     return   res.status(401).json({message:"Unauthenticated"})
    }
    next()
}
export const requireAdmin =async (req, res, next) => {
    try { 
        
        console.log(req.headers.auth)
        const currentUser = await clerkClient.users.getUser(req.headers.auth)
        const isAdmin = process.env.ADMIN_EMAIL === currentUser.primaryEmailAddress?.emailAddress
        if (!isAdmin) {

                 return   res.status(403).json({message:"non authorized"})

        }
        next()
    } catch (error) {
        res.status(500).json({message:"failed"})
        console.log(error)
    }
    
}