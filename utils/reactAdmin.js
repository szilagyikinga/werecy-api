const defaultRequestToFilters = () => {
  return {};
};

const list =
  (Model, requestToFilters = defaultRequestToFilters) =>
  async (req, res, next) => {
    try {
      const { _end, _order, _sort, _start, q } = req.query;
      const filters = requestToFilters(req);
      const [establishments, count] = await Promise.all([
        Model.find(filters)
          .limit(Number.parseInt(_end) - Number.parseInt(_start))
          .skip(Number.parseInt(_start))
          .sort(`${_order === 'ASC' ? '-' : '+'}${_sort}`)
          .exec(),
        Model.count(filters),
      ]);

      res.header('X-Total-Count', count);
      res.status(200).json(establishments);
      return next();
    } catch (err) {
      return next(err);
    }
  };

module.exports = {
  list,
};
