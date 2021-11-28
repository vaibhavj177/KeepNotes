const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');

console.log("Router Loaded Succesfully");
router.get('/', homeController.home);

module.exports = router;