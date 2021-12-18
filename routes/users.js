const express = require('express');
const router = express.Router();
const passport = require('passport');
const userController = require('../controllers/userController');

console.log("User router loaded succesfully");
router.get('/sign-in', userController.signIn);
router.get('/sign-up', userController.signUp);
router.post('/create', userController.create);
router.post('/session',passport.authenticate('local', {
    failureRedirect: '/users/sign-in'
}) ,userController.session);
router.get('/sign-out', userController.signOut);

module.exports = router;