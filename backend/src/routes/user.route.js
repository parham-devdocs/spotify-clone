import { Router } from "express";
import { protectedRoute, requireAdmin } from "../../middleware/auth.middleware.js";
const router = Router()

router.get("/like",protectedRoute,requireAdmin, (req, res) => {
  
    res.json({message: "hello user" });
});


export default router