const mongoose = require('mongoose');
const courseSchema = new mongoose.Schema({
    
    course:String
    
})

module.exports = mongoose.model('course',courseSchema)