import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.status(200).json({ message: 'Lista de vendas (placeholder)' });
});

router.post('/', (req, res) => {
  res.status(201).json({ message: 'Venda criada (placeholder)' });
});

export default router;
