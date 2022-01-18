const express = require('express');
const router = express.Router();
const { Admin } = require('./admin.model');
const controllerGenerator = require('../../utils/reactAdmin');
const bcrypt = require('bcrypt');

const ROUND_SALT = 12;
const transformer = async ({ password, ...dataToWrite }) => {
  if (password) {
    Object.assign(dataToWrite, { hash: bcrypt.hashSync(password, ROUND_SALT) });
  }

  console.log({ dataToWrite, password });
  return dataToWrite;
};

const controller = controllerGenerator(Admin, transformer);

router.get('/', controller.list);
router.post('/', controller.create);
router.get('/:id', controller.get);
router.put('/:id', controller.update);

module.exports = router;
