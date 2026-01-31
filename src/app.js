import express from "express";
import { env } from "./config/env.js";
import routes from "./routes/index.js";

const app = express();

/**
 * Middlewares globais
 * -------------------
 * - Parser JSON
 * - Aqui entram CORS, rate limit, etc.
 */
app.use(express.json());

/**
 * Health check
 * ------------
 * Usado por monitoramento, load balancer e deploy
 */
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "ok",
    environment: env.nodeEnv,
    uptime: process.uptime(),
  });
});

/**
 * Rotas da API (versionadas)
 * --------------------------
 * Permite evoluir sem quebrar clientes antigos
 */
app.use("/api/v1", routes);

export default app;
