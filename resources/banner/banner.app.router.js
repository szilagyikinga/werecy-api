const express = require('express');
const controller = require('./banner.app.controllers');
const router = express.Router();

router.get('/', controller.getMany);

module.exports = router;
