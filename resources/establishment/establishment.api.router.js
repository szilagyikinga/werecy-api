const express = require('express');
const controller = require('./establishment.api.controllers');
const router = express.Router();

router.get('/', controller.getMany);

module.exports = router;
