const express = require('express');
const port = 8000;
const expressLayouts = require('express-ejs-layouts');
const app = express();

app.use(expressLayouts);

app.set('view engine', 'ejs');
app.set('views', './views');

app.use('/', require('./routes'));
app.listen(port, function(err){
    if(err){
        console.log(`Error in starting the Server: ${err}`);
    }
    console.log(`Server started at port: ${port}`);
})