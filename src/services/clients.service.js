const clientsService = {
  list() {
    // No futuro: buscar no banco
    return [];
  },

  create({ name, phone }) {
    if (!name) {
      throw new Error('Nome do cliente é obrigatório');
    }

    // Regra de negócio mínima
    return {
      id: crypto.randomUUID(),
      name,
      phone: phone || null,
      createdAt: new Date(),
    };
  },
};

export default clientsService;
