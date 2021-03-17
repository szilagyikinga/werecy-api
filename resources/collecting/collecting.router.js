const express = require('express');
const controller = require('./collecting.controllers');
const router = express.Router();

router.get('/', controller.getMany);
router.post('/', controller.createOne);
router.post('/validate/:id', controller.validateOne);
router.post('/cancel/:id', controller.cancelOne);

module.exports = router;
