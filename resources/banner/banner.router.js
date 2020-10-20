const express = require('express');
const controller = require('./banner.controllers');
const router = express.Router();

router.get('/', controller.getMany);

module.exports = router;
