const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');
const notesController = require('../controllers/notesController');


console.log("Router Loaded Succesfully");
router.get('/', homeController.home);
router.get('/notes', notesController.notes);
router.use('/create-note', require('./note'));
router.use('/users', require('./users'));

module.exports = router;