const ObjectId = require('mongoose').Types.ObjectId;
const { ObjectID } = require('mongodb');

/**
 * Get filters from request query
 *
 * @param {object} query request query
 * @returns {object} filter to apply
 */
const getFilters = (query) => {
  const { q, ...filters } = query;
  const queryFilters = {};

  // if a "q" params is present, search it via text index
  // https://docs.mongodb.com/manual/reference/operator/query/text/
  if (q) {
    Object.assign(queryFilters, {
      $text: { $search: q },
    });
  }

  if (filters) {
    Object.keys(filters)
      // remove _xxxx filters (used for sort and pagination)
      .filter((key) => key[0] !== '_')
      // Converting filter
      .map((key) => {
        const filterValue = filters[key];

        Object.assign(queryFilters, {
          [key === 'id' ? '_id' : key]: Array.isArray(filterValue) ? { $in: filterValue } : filterValue,
        });
      });
  }

  return queryFilters;
};

const list = (Model) => async (req, res, next) => {
  try {
    const { _end, _order, _sort, _start } = req.query;

    let sort = _sort ? _sort : 'createdAt';

    const filters = getFilters(req.query);
    const [entities, count] = await Promise.all([
      Model.find(filters)
        .limit(Number.parseInt(_end) - Number.parseInt(_start))
        .skip(Number.parseInt(_start))
        .sort([[sort, _order === 'ASC' ? -1 : 1]])
        .exec(),
      Model.countDocuments(filters),
    ]);

    res.header('X-Total-Count', count);
    res.status(200).json(entities);
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

const update = (Model, transformer, onSuccess) => async (req, res, next) => {
  try {
    const dataToUpdate = transformer ? await transformer(req.body) : req.body;
    const initialItem = await Model.findByIdAndUpdate(req.params.id, dataToUpdate).exec();
    const updatedItem = await Model.findById(req.params.id).exec();

    onSuccess && onSuccess(initialItem, updatedItem);

    res.status(200).json(updatedItem);
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

module.exports = (Model, transformer, onUpdateSuccess) => ({
  list: list(Model),
  get: get(Model),
  update: update(Model, transformer, onUpdateSuccess),
  create: create(Model, transformer),
});
