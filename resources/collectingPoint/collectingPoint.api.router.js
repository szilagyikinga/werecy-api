const express = require('express');
const router = express.Router();
const { CollectingPoint } = require('./collectingPoint.model');
const { Establishment } = require('../establishment/establishment.model');
const controllerGenarator = require('../../utils/reactAdmin');
const upload = require('../../utils/upload');

// Deconstruction to avoid side effect and able to use Object.assign
const transformer = async ({ _id, createdAt, updatedAt, location, types, __v, ...dataToWrite }) => {
  if (dataToWrite.establishment) {
    const { location, types } = await Establishment.findById(dataToWrite.establishment).exec();
    Object.assign(dataToWrite, { location, types });
  }

  if (dataToWrite.image && typeof dataToWrite.image !== 'string') {
    Object.assign(dataToWrite, { image: await upload(dataToWrite.image.base64) });
  }
  return dataToWrite;
};

const controller = controllerGenarator(CollectingPoint, transformer);
router.get('/', controller.list);
router.post('/', controller.create);
router.get('/:id', controller.get);
router.put('/:id', controller.update);

module.exports = router;
