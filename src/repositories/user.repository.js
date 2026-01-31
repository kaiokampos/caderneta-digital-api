import { randomUUID } from "node:crypto";

const users = new Map();

/**
 * Salva um novo usuário
 */
export function createUser({ name, email, passwordHash }) {
  const user = {
    id: randomUUID(),
    name,
    email,
    passwordHash,
    createdAt: new Date(),
  };

  users.set(email, user);
  return user;
}

/**
 * Busca usuário por email
 */
export function findUserByEmail(email) {
  return users.get(email);
}

/**
 * Busca usuário por id
 */
export function findUserById(id) {
  for (const user of users.values()) {
    if (user.id === id) return user;
  }
  return null;
}
