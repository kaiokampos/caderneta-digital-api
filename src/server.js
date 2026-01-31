import app from "./app.js";
import { env } from "./config/env.js";

/**
 * Porta configurável via ambiente
 * (fundamental para produção)
 */
const PORT = env.port || 3000;

/**
 * Bootstrap do servidor HTTP
 */
app.listen(PORT, () => {
  console.log(`🚀 API rodando na porta ${PORT} (${env.nodeEnv})`);
});
