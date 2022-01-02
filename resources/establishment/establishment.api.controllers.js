const model = require('./establishment.model');

const getMany = async (req, res) => {
  const establishments = await model.Establishment.find({}).lean().exec();
  res.status(200).json(establishments);
};

module.exports = { getMany };
