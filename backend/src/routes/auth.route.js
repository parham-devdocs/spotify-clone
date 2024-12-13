import { Router } from "express";
import { User } from "../../models/user.model.js";
import { authController } from "../../controllers/auth.controller.js";
const router = Router()

router.post("/callback",authController);


export default router