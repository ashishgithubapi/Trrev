const mongoose = require('mongoose');
const enquirySchema = new mongoose.Schema({
    
    name:String,
    email:String,
    address:String,
    phone:Number,
    age:Number,
    course:String,
    qualification:String,
    enquirydate:Number,
    followupdate:Number,
    remark:String
    
})

module.exports = mongoose.model('enquiry',enquirySchema)