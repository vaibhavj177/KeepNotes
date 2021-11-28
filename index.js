const express = require('express');
const port = 8000;
const app = express();

app.use('/', require('./routes'));
app.listen(port, function(err){
    if(err){
        console.log(`Error in starting the Server: ${err}`);
    }
    console.log(`Server started at port: ${port}`);
})