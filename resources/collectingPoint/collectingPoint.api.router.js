const express = require('express');
const router = express.Router();
const { CollectingPoint } = require('./collectingPoint.model');
const { Establishment } = require('../establishment/establishment.model');
const controllerGenarator = require('../../utils/reactAdmin');

// Deconstruction to avoid side effect and able to use Object.assign
const transformer = async ({ _id, createdAt, updatedAt, location, types, rewards, __v, ...dataToWrite }) => {
  if (dataToWrite.establishment) {
    const { location, types } = await Establishment.findById(dataToWrite.establishment).exec();
    Object.assign(dataToWrite, { location, types });
  }

  return dataToWrite;
};

const controller = controllerGenarator(CollectingPoint, transformer);
router.get('/', controller.list);
router.post('/', controller.create);
router.get('/:id', controller.get);
router.put('/:id', controller.update);

module.exports = router;
