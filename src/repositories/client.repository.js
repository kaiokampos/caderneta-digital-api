import clientRepository from "../repositories/client.repository.js";

const clientsService = {
  async list() {
    return await clientRepository.list();
  },

  async create({ name, phone }) {
    if (!name) throw new Error("Nome do cliente é obrigatório");

    return await clientRepository.create({ name, phone });
  },
};

export default clientsService;
