const uuid = require('uuid').v4;
const cloudinary = require('cloudinary').v2;

/**
 * Extract file name from file URL to store it in mongo
 * @param {string} path public URL of the file
 * @returns {string} stored name (xxx.ext)
 */
const urlToImageValue = (path) => path.split('/').slice(-1)[0];

/**
 *  https://cloudinary.com/documentation/upload_images#upload_via_a_base_64_data_uri
 * @param {string} base64 base64 image
 * @returns {Promise<string>} upload file name
 */
const upload = (base64) =>
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
