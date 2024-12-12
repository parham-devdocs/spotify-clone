import { Router } from "express";
const router = Router()

router.get("/", (req, res) => {
  res.json({ message: "songs here" });
});


export default router