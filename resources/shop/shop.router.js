const express = require('express');
const controller = require('./shop.controllers');
const router = express.Router();

router.get('/', controller.getMany);
router.get('/add', controller.addShops);

module.exports = router;
