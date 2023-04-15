var mongoose=require('mongoose');
 
var Otpschema = new mongoose.Schema({
    phone_number:Number,
    otp:String,
    status:Boolean,
    time:Date,
    branch_type:String
});

var Phoneschema = new mongoose.Schema({
    phone_number:Number,
    owner:String
});


// Exporting our model objects
module.exports = {
    Otpschema, Phoneschema
}