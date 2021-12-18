const express = require('express');
const port = 8000;
const cookieParser = require('cookie-parser');
const expressLayouts = require('express-ejs-layouts');
const sassMiddleware = require('node-sass-middleware');
const db = require('./config/mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const passport = require('passport');
const passportLocal = require('./config/passport');
const app = express();

app.use(expressLayouts);
app.use(express.urlencoded());
app.use(sassMiddleware({
    src: './assets/scss',
    dest: './assets/css',
    debug: true,
    outputStyle: 'extended',
    prefix: '/css'
}));

app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

app.use(express.static('./assets'));

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(session({
    name: 'KeepNotes',
    secret: 'MannSudhir',
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: (1000 * 60 * 10)
    },
    store: MongoStore.create({
        mongoUrl: 'mongodb://localhost/KeepNotes',
        autoRemove: 'disabled'
    },
    function(err){
        console.log(`Error in Setup: ${err}`|| 'Connect MongoDB Setup OK');
    })
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(cookieParser());

app.use(passport.setAuthenticatedUser);

app.use('/', require('./routes'));
app.listen(port, function(err){
    if(err){
        console.log(`Error in starting the Server: ${err}`);
    }
    console.log(`Server started at port: ${port}`);
})