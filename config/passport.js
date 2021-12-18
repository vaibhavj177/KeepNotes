const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const User = require('../models/user');

passport.use(new localStrategy({
    usernameField: 'email',
    passReqToCallback: true
},
function(req, email, password, done) {
    User.findOne({ email: email }, function(err, user) {
        if(err) {
            console.log(err);
            return done(err);
        }
        if(!user || user.password != password) {
            console.log("Invalid Username and Password");
            return done(null, false);
        }
        console.log("User Logged in");
        return done(null, user);
    });
})
);
passport.serializeUser(function(user, done) {
    done(null, user.id);
});
passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
        if(err){
            console.log("Error in finding User -> passport");
            return done(err);
        }
        return done(null, user);
    });
});

passport.checkAuthentication = function(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    return res.redirect('/users/sign-in');
}

passport.setAuthenticatedUser = function(req, res, next){
    if(req.isAuthenticated()){
        res.locals.user = req.user;
    }
    return next();
}
