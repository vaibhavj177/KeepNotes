const Note = require('../models/note');
module.exports.createNote = function(req, res){
    return res.render('createNote', {
        title: 'CreateNote'
    });
}
module.exports.create = async function(req, res){
   try{
    console.log(req.body);
    await Note.create(req.body);
    return res.redirect('/notes');
   }
   catch(err){
       console.log(err);
       return res.redirect('/');
   }
    
}