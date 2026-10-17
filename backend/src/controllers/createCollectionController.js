function createCollectionController(model) {
  return {
    async list(req, res, next) {
      try {
        return res.json(await model.list());
      } catch (error) {
        return next(error);
      }
    },
    async get(req, res, next) {
      try {
        const record = await model.findById(req.params.id);
        if (!record) return res.status(404).json({ error: 'Item not found.' });
        return res.json(record);
      } catch (error) {
        return next(error);
      }
    },
    async create(req, res, next) {
      try {
        return res.status(201).json(await model.create(req.body));
      } catch (error) {
        if (error.status) return res.status(error.status).json({ error: error.message });
        if (error.code === 11000) return res.status(409).json({ error: 'That slug is already in use.' });
        return next(error);
      }
    },
    async update(req, res, next) {
      try {
        const record = await model.update(req.params.id, req.body);
        if (!record) return res.status(404).json({ error: 'Item not found.' });
        return res.json(record);
      } catch (error) {
        if (error.status) return res.status(error.status).json({ error: error.message });
        if (error.code === 11000) return res.status(409).json({ error: 'That slug is already in use.' });
        return next(error);
      }
    },
    async remove(req, res, next) {
      try {
        if (!await model.remove(req.params.id)) return res.status(404).json({ error: 'Item not found.' });
        return res.status(204).end();
      } catch (error) {
        return next(error);
      }
    },
  };
}

module.exports = createCollectionController;
