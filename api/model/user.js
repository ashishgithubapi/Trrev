const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    
    phone:Number,
    password:String,
    
})

module.exports = mongoose.model('user',userSchema)