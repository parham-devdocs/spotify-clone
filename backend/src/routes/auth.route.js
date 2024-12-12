import { Router } from "express";
const router = Router()

router.get("/login", (req, res) => {
  res.json({ message: "hello" });
});

router.get("/register", (req, res) => {
  res.json({ message: "hello" });
});


export default router