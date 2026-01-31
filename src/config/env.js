import "dotenv/config";

function required(name) {
  if (!process.env[name]) {
    throw new Error(`❌ Variável de ambiente ${name} não definida`);
  }
  return process.env[name];
}

export const env = {
  nodeEnv: process.env.NODE_ENV || "development",
  port: process.env.PORT || 3000,
  jwtSecret: required("JWT_SECRET"),
};
