
const bodyParser=require('body-parser');
const api0 = require('./api-0');
const api0_10000 = require('./api0-10000');
const api2 = require('./api2');
const api3 = require('./api3');

const express=require('express');

let port = process.env.PORT || 3000;
const app=express();
  
app.listen(port, function() {
    console.log("Server is listening at port:" + port);
});
 
// Parses the text as url encoded data
app.use(bodyParser.urlencoded({extended: true}));
 
// Parses the text as json
app.use(bodyParser.json());
 
app.use('/api/farm-2', api2);
app.use('/api/farm-3', api3);
app.use('/api/farm-0', api0);
app.use('/api/farm-0-10000', api0_10000);

console.log("Test");