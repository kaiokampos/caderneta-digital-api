import bcrypt from "bcryptjs";
import {
  createUser,
  findUserByEmail,
} from "../repositories/user.repository.js";

const SALT_ROUNDS = 10;

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
