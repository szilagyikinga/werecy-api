const express = require('express');
const controller = require('./collectingPoint.app.controllers');
const router = express.Router();

router.get('/', controller.getMany);
// router.get('/add', controller.addMany);

module.exports = router;
