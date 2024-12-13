import { Router } from "express";
import { GetAdmin } from "../../controllers/admin.controller.js";
const router = Router()

router.get("/", GetAdmin);


export default router