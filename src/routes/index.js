import { Router } from "express";
import authRoutes from "./auth.routes.js";
import clientsRoutes from "./clients.routes.js";
import salesRoutes from "./sales.routes.js";

const router = Router();

router.use("/auth", authRoutes);
router.use("/clients", clientsRoutes);
router.use("/sales", salesRoutes);

export default router;
