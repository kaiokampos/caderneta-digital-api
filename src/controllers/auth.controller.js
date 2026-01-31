import { registerUser } from '../services/auth.service.js';

export async function register(req, res) {
  try {
    const { name, email, password } = req.body;

    // Validação mínima (contrato HTTP)
    if (!name || !email || !password) {
      return res.status(400).json({
        error: 'name, email e password são obrigatórios',
      });
    }

    const user = await registerUser({ name, email, password });

    return res.status(201).json(user);
  } catch (error) {
    const status = error.statusCode || 500;

    return res.status(status).json({
      error: error.message || 'Erro interno do servidor',
    });
  }
}
