var mongoose=require('mongoose');
 
var Phoneschema = new mongoose.Schema({
    phone_number:Number,
    owner:String
});

module.exports = mongoose.model(
    'phone', Phoneschema, 'phones');