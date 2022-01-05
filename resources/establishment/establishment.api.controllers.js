const model = require('./establishment.model');

const getMany = async (req, res, next) => {
  try {
    const { _end, _order, _sort, _start, q } = req.query;
    const [establishments, count] = await Promise.all([
      model.Establishment.find({})
        .limit(Number.parseInt(_end) - Number.parseInt(_start))
        .skip(Number.parseInt(_start))
        .sort(`${_order === 'ASC' ? '-' : '+'}${_sort}`)
        .exec(),
      model.Establishment.count({}),
    ]);

    console.log({ count });

    res.header('X-Total-Count', count);
    res.status(200).json(establishments);
    return next();
  } catch (err) {
    return next(err);
  }
};

module.exports = { getMany };
