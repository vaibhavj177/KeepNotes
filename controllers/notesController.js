const Note = require('../models/note');
module.exports.notes = async function(req, res){
    try{
        let notes = await Note.find({})
        return res.render('notes', {
            title: 'Notes',
            notes: notes
        });
        
    }catch(err){
        console.log("Error");
        return res.redirect('/')
    }
    
}