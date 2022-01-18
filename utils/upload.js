const uuid = require('uuid').v4;
const cloudinary = require('cloudinary').v2;

const urlToImageValue = (path) => path.split('/').slice(-1)[0];

const upload = async ({ base64, type }) =>
  new Promise((resolve, reject) =>
    cloudinary.uploader.upload(
      base64,
      {
        tags: 'basic_sample',
        public_id: uuid(),
      },
      (err, image) => (err ? reject(err) : resolve(urlToImageValue(image.secure_url)))
    )
  );

module.exports = upload;
