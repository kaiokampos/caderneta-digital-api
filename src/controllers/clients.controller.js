import clientsService from "../services/clients.service.js";

const clientsController = {
  list(req, res) {
    const clients = clientsService.list();

    res.status(200).json(clients);
  },

  create(req, res) {
    try {
      const client = clientsService.create(req.body);

      res.status(201).json(client);
    } catch (error) {
      res.status(400).json({
        error: error.message,
      });
    }
  },
};

export default clientsController;
