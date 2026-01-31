import { Router } from "express";

const router = Router();

router.post("/register", (req, res) => {
  res.status(201).json({ message: "Register placeholder" });
});

router.post("/login", (req, res) => {
  res.status(200).json({ message: "Login placeholder" });
});

export default router;
