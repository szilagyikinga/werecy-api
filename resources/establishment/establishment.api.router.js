const express = require('express');
const router = express.Router();
const { Establishment } = require('./establishment.model');
const controllerGenerator = require('../../utils/reactAdmin');
const uuid = require('uuid').v4;
const cloudinary = require('cloudinary').v2;

const upload = async (base64, type) =>
  new Promise((resolve, reject) =>
    cloudinary.uploader.upload(
      `data:${type};base64,${base64}`,
      {
        tags: 'basic_sample',
        public_id: uuid(),
      },
      (err, image) => (err ? reject(err) : resolve(image.secure_url.split('/').slice(-1)))
    )
  );

const transformer = async ({ image, logo, ...dataToWrite }) => {
  const data = {
    ...dataToWrite,
    image: typeof image !== 'string' ? await upload(image) : image,
    logo: typeof logo !== 'string' ? await upload(logo) : logo,
  };

  console.log(data);
  return data;
};

const controller = controllerGenerator(Establishment, transformer);

router.get('/', controller.list);
router.post('/', controller.create);
router.get('/:id', controller.get);
router.put('/:id', controller.update);

module.exports = router;
