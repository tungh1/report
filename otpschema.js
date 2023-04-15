var mongoose=require('mongoose');
 
var Otpschema = new mongoose.Schema({
    phone_number:Number,
    otp:String,
    status:Boolean,
    time:Date,
    branch_type:String
});

module.exports = mongoose.model(
    'otp', Otpschema, 'otps');