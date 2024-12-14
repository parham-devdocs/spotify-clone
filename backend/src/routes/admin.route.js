import { Router } from "express";
import { protectedRoute, requireAdmin } from "../../middleware/auth.middleware.js";
const router = Router();

router.get("/", protectedRoute, requireAdmin, (req, res) => {
  req.res.json({ message: "hello user" });
});

export default router;
