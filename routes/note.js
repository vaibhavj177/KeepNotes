const express = require('express');
const router = express.Router();
const createNoteController = require('../controllers/createNote');

console.log("Note router loaded succesfully");

router.get('/', createNoteController.createNote);
router.post('/save-note', createNoteController.create);
module.exports = router;