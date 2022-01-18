const ObjectId = require('mongoose').Types.ObjectId;
const { ObjectID } = require('mongodb');

const getFilters = (query) => {
  const { id, q, ...filters } = query;
  const queryFilters = {};

  if (id) {
    Object.assign(queryFilters, {
      _id: Array.isArray(id) ? { $in: id } : id,
    });
  }

  if (q) {
    Object.assign(queryFilters, {
      $text: { $search: q },
    });
  }

  if (filters) {
    Object.keys(filters)
      .filter((key) => key[0] !== '_')
      .map((key) => {
        const filterValue = filters[key];

        Object.assign(queryFilters, {
          [key]: Array.isArray(filterValue) ? { $in: filterValue } : filterValue,
        });
      });
  }

  return queryFilters;
};

const list = (Model) => async (req, res, next) => {
  try {
    const { _end, _order, _sort, _start } = req.query;

    const filters = getFilters(req.query);
    const [establishments, count] = await Promise.all([
      Model.find(filters)
        .limit(Number.parseInt(_end) - Number.parseInt(_start))
        .skip(Number.parseInt(_start))
        .sort(`${_order === 'ASC' ? '-' : '+'}${_sort}`)
        .exec(),
      Model.countDocuments(filters),
    ]);

    res.header('X-Total-Count', count);
    res.status(200).json(establishments);
    return next();
  } catch (err) {
    return next(err);
  }
};

const get = (Model) => async (req, res, next) => {
  try {
    const item = await Model.findById(req.params.id).exec();
    res.status(200).json(item);
    return next();
  } catch (err) {
    return next(err);
  }
};

const update = (Model, transformer) => async (req, res, next) => {
  try {
    const dataToUpdate = transformer ? await transformer(req.body) : req.body;
    await Model.findByIdAndUpdate(req.params.id, dataToUpdate).exec();
    const item = await Model.findById(req.params.id).exec();

    res.status(200).json(item);
    return next();
  } catch (err) {
    return next(err);
  }
};

const create = (Model, transformer) => async (req, res, next) => {
  try {
    const dataToCreate = transformer ? await transformer(req.body) : req.body;
    const item = new Model(dataToCreate, true);
    await item.save();
    res.status(200).json(item);
    return next();
  } catch (err) {
    return next(err);
  }
};

module.exports = (Model, transformer) => ({
  list: list(Model),
  get: get(Model),
  update: update(Model, transformer),
  create: create(Model, transformer),
});
