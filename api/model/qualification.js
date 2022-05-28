const mongoose = require('mongoose');
const qualificationSchema = new mongoose.Schema({
    
    qualification:String
    
})

module.exports = mongoose.model('qualification',qualificationSchema)