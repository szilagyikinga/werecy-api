const express = require('express');
const router = express.Router();
const { Collecting } = require('./collecting.model');
const controller = require('../../utils/reactAdmin')(Collecting);

router.get('/', controller.list);
router.get('/:id', controller.get);

module.exports = router;
