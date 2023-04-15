var mongoose=require('mongoose');
var {Otpschema, Phoneschema} = require('./model');

const options = {
    autoIndex: false, // Don't build indexes
    maxPoolSize: 10, // Maintain up to 10 socket connections
    serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
    socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    family: 4 // Use IPv4, skip trying IPv6
  };

const conn = mongoose.createConnection('mongodb+srv://tunghoang:Abc1234@mandiver-cluster.wrsn1wf.mongodb.net/farm-0-10000', options);
const OtpModel = conn.model('otp', Otpschema, 'otps');
const PhoneModel = conn.model('phone', Phoneschema, 'phones');


module.exports = {
    OtpModel, PhoneModel
};