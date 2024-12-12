import { Router } from "express";
const router = Router()

router.get("/", (req, res) => {
  res.json({ message: "albums here" });
});


export default router