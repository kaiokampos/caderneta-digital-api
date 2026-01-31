import bcrypt from "bcryptjs";
import {
  createUser,
  findUserByEmail,
} from "../repositories/user.repository.js";

const SALT_ROUNDS = 10;

/**
 * REGISTER
 */
export async function registerUser({ name, email, password }) {
  // Regra 1: email único
  const existingUser = findUserByEmail(email);
  if (existingUser) {
    const error = new Error("Email já está em uso");
    error.statusCode = 409;
    throw error;
  }

  // Regra 2: hash de senha
  const passwordHash = await bcrypt.hash(password, SALT_ROUNDS);

  const user = createUser({
    name,
    email,
    passwordHash,
  });

  // Nunca retornar hash
  return {
    id: user.id,
    name: user.name,
    email: user.email,
  };
}

/**
 * LOGIN
 */
export async function loginUser({ email, password }) {
  const user = findUserByEmail(email);

  if (!user) {
    const error = new Error("Credenciais inválidas");
    error.statusCode = 401;
    throw error;
  }

  const passwordMatches = await bcrypt.compare(password, user.passwordHash);

  if (!passwordMatches) {
    const error = new Error("Credenciais inválidas");
    error.statusCode = 401;
    throw error;
  }

  const token = signToken({
    sub: user.id,
    email: user.email,
  });

  return { token };
}
