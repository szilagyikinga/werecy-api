const express = require('express');
const controller = require('./collecting.controllers');
const router = express.Router();

router.get('/', controller.getMany);
router.post('/', controller.createOne);

module.exports = router;
