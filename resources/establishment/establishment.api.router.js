const express = require('express');
const router = express.Router();
const { Establishment } = require('./establishment.model');
const { CollectingPoint } = require('./../collectingPoint/collectingPoint.model');
const controllerGenerator = require('../../utils/reactAdmin');
const upload = require('../../utils/upload');

const transformer = async ({ image, logo, ...dataToWrite }) => {
  const [imageValue, logoValue] = await Promise.all([
    typeof image !== 'string' ? await upload(image.base64) : image,
    typeof logo !== 'string' ? await upload(logo.base64) : logo,
  ]);

  const data = {
    ...dataToWrite,
    image: imageValue,
    logo: logoValue,
  };

  return data;
};

const onUpdateSuccess = async (initial, updated) => {
  const collectingPointUpdates = {};
  if (initial.types.length !== updated.types.length || !initial.types.every((type) => updated.types.includes(type))) {
    collectingPointUpdates.types = updated.types;
  }
  if (
    initial.location.coordinates[0] !== updated.location.coordinates[0] ||
    initial.location.coordinates[1] !== updated.location.coordinates[1]
  ) {
    collectingPointUpdates.location = updated.location;
  }

  if (Object.entries(collectingPointUpdates).length !== 0) {
    await CollectingPoint.updateMany({ establishment: initial._id }, collectingPointUpdates);
  }
};

const controller = controllerGenerator(Establishment, transformer, onUpdateSuccess);

router.get('/', controller.list);
router.post('/', controller.create);
router.get('/:id', controller.get);
router.put('/:id', controller.update);

module.exports = router;
