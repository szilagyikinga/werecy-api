const express = require('express');
const controller = require('./collectingPoint.app.controllers');
const router = express.Router();

router.get('/', controller.getMany);

module.exports = router;
