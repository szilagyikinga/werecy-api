const express = require('express');
const router = express.Router();
const { Establishment } = require('./establishment.model');
const controller = require('../../utils/reactAdmin')(Establishment);

router.get('/', controller.list);
router.post('/', controller.create);
router.get('/:id', controller.get);
router.put('/:id', controller.update);

module.exports = router;
