const express = require('express');
const controller = require('./collectingPoint.controllers');
const router = express.Router();

router.get('/', controller.getMany);
router.get('/add', controller.addMany);

module.exports = router;
