const express = require('express');
const router = express.Router();
const { User } = require('./user.model');
const controller = require('../../utils/reactAdmin')(User);

router.get('/', controller.list);
router.get('/:id', controller.get);

module.exports = router;
