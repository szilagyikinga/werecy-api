const model = require('./establishment.model');
const routerGenerator = require('../../utils/reactAdmin');

module.exports = {
  getMany: routerGenerator.list(model.Establishment),
};
