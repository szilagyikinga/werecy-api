const express = require('express');
const router = express.Router();
const { Establishment } = require('./establishment.model');
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

const controller = controllerGenerator(Establishment, transformer);

router.get('/', controller.list);
router.post('/', controller.create);
router.get('/:id', controller.get);
router.put('/:id', controller.update);

module.exports = router;
