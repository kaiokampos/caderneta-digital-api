import { Router } from "express";
import clientsController from "../controllers/clients.controller.js";

const router = Router();

router.get("/", clientsController.list);
router.post("/", clientsController.create);

export default router;
