const ObjectId = require('mongoose').Types.ObjectId;
const { ObjectID } = require('mongodb');

const list = (Model) => async (req, res, next) => {
  try {
    const { _end, _order, _sort, _start, q } = req.query;
    const filters = q ? { $text: { $search: q } } : {};
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

const get = (Model) => async (req, res, next) => {
  try {
    const item = await Model.findById(req.params.id).exec();
    res.status(200).json(item);
    return next();
  } catch (err) {
    return next(err);
  }
};

const update = (Model) => async (req, res, next) => {
  try {
    await Model.findByIdAndUpdate(req.params.id, req.body).exec();
    const item = await Model.findById(req.params.id).exec();

    res.status(200).json(item);
    return next();
  } catch (err) {
    return next(err);
  }
};

const create = (Model) => async (req, res, next) => {
  try {
    const item = new Model(req.body, true);
    await item.save();
    res.status(200).json(item);
    return next();
  } catch (err) {
    return next(err);
  }
};

module.exports = (Model) => ({
  list: list(Model),
  get: get(Model),
  update: update(Model),
  create: create(Model),
});
