import pkg from "pg";
const { Pool } = pkg;
import { env } from "./env.js";

export const pool = new Pool({
  user: "kaio",
  host: "localhost",
  database: "caderneta_db",
  password: "kaio123",
  port: 5432,
});
