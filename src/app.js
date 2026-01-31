import express from "express";
import { env } from "./config/env.js";
import routes from "./routes/index.js";

const app = express();

app.use(express.json());

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "ok",
    environment: env.nodeEnv,
    uptime: process.uptime(),
  });
});

// API versionada
app.use("/api/v1", routes);

export default app;
