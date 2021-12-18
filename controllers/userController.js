const User = require('../models/user');
const passport = require('passport');
const passportLocal = require('../config/passport');
module.exports.signIn = function(req, res) {
    return res.render('sign-in', {
        title: 'Sign-in'
    });
}

module.exports.signUp = function(req, res) {
    return res.render('sign-up', {
        title: 'Sign Up'
    });
}

module.exports.session = function(req, res) {
    return res.render('home', {
        title: 'Home'
    });
}

module.exports.create = async function(req, res) {
    try{
        await User.create(req.body);
        return res.render('sign-up', {
            title: 'Sign-up'
        });
        
    } catch(err) {
        console.log(err);
        return res.render('home', {
            title: 'Home'
        });
    }

}

module.exports.signOut = function(req, res){
    req.logout();
    console.log('sign-out succesfully');
    return res.render('home', {
        title: 'home'
    });
}