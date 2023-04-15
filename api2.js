const { OtpModel, PhoneModel } = require('./farm-2-db');
const express=require('express');
var router = express.Router();
var request=require('request-promise');




// //update phone
router.post('/updatephone', async (req, res) => {
    var options = {
        uri: "https://smsgatewayprod.vdtsecurity.vn/v2/sims?page=1&limit=10000&brandType=facebook",
        method: "GET",
        headers: {
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NDJlMzcxMzQ4MGY0YzAwMjc5ZWY4NWMiLCJpYXQiOjE2ODA5NDQ1NTksImV4cCI6MTY4MjE1NDE1OSwidHlwZSI6ImFjY2VzcyJ9.qevsACREV7qlQAAoval34-bEhcq9C146rzGhOAHOP2U'
          },
        json: true
    }

    var result50k = await request(options);
    result50k.results.forEach(async(element) => {
        console.log(element.msisdn);
        var phone_model = new PhoneModel();
        phone_model.phone_number = element.msisdn;
        phone_model.owner = 'HIE';
        output = await phone_model.save();
    });
    res.send("updated");

});

// router.post('/update', async (req, res) => {
//     const filter = {_id: req.query.id}
//     const doc = await OtpModel.findOneAndUpdate(filter, {status: true}, {
//         new: true,
//         upsert: true
//     });
//     res.send("Data updated!");

// });

// router.get('/otp', function(req, res) { 
//   try {
//     const filter = { phone_number: req.query.phone_number, branch_type: req.query.branch_type, status: req.query.status };
//     OtpModel.findOne(filter).then(function(models){
//         res.send(models);
//     }) 
//   } catch (err){
//     res.send(err);
//   };
 
// });

// router.get('/otp/report-123', async (req, res) => {
//     var current_date = new Date().toLocaleDateString();
//     var timestamp = new Date(current_date);
//     const filter = {timestamp: timestamp.getTime()};

//     const data = await OtpModel.aggregate().sortByCount("branch_type");
//     const count_otp = await OtpModel.count(filter);
    
//     var result = "<p>" + new Date() + "</p><p> "+ JSON.stringify(data)  +" </p><p>Total OTP: " + count_otp + "</p>";
//     res.send(result);
    
// });


router.get('/otp/report', async (req, res) => {
  var current_date = new Date().toLocaleDateString();
  var timestamp = new Date(current_date);
  const filter = {timestamp: timestamp.getTime()};

  // const lstPhoneHieu = (await PhoneModel.find({owner: 'HIE'})).map(item => item.phone_number);
  // const lstPhoneThang = (await PhoneModel.find({owner: 'HAI'})).map(item => item.phone_number);

  //const data = await OtpModel.aggregate().sortByCount("branch_type");
  const lstOtp = await OtpModel.find(filter);
  console.log("API");
  console.log(lstOtp.length);

  const count_google = lstOtp.filter(x => x.branch_type == 'Google');
  const count_facebook = lstOtp.filter(x => x.branch_type == 'Facebook');
  const count_agoda = lstOtp.filter(x => x.branch_type == 'Agoda');
  const count_apple = lstOtp.filter(x => x.branch_type == 'Apple');
  const count_huawei = lstOtp.filter(x => x.branch_type == 'Huawei');
  const count_line = lstOtp.filter(x => x.branch_type == 'Line');
  const count_bigo = lstOtp.filter(x => x.branch_type == 'Bigo');
  const count_discord = lstOtp.filter(x => x.branch_type == 'Discord');
  const count_grab = lstOtp.filter(x => x.branch_type == 'Grab');
  const count_kucoin = lstOtp.filter(x => x.branch_type == 'KuCoin');

  
  var result = "<p id='farm2' total='" + lstOtp.length + "'><b>Farm 2</b></br><b>Team Hiếu: "+ lstOtp.length +"</b></br>";
  result += "Google: " + count_google.length + "</br>";
  result += "Facebook: " + count_facebook.length + "</br>";
  result += "Agoda: " + count_agoda.length + "</br>";
  result += "Apple: " + count_apple.length + "</br>";
  result += "Huawei: " + count_huawei.length + "</br>";
  result += "Line: " + count_line.length + "</br>";
  result += "Bigo: " + count_bigo.length + "</br>";
  result += "Discord: " + count_discord.length + "</br>";
  result += "Grab: " + count_grab.length + "</br>";
  result += "Kucoin: " + count_kucoin.length + "</br>";

  // result += "<b>Team Hải: " + lstPhoneThang.length + " </b></br>";
  // result += "Google: " + count_google_tha.length + "</br>";
  // result += "Facebook: " + count_facebook_tha.length + "</br>";
  // result += "Line: " + count_line_tha.length + "</br>";
  // result += "Bigo: " + count_bigo_tha.length + "</br>";
  // result += "Discord: " + count_discord_tha.length + "</br>";
  // result += "Grab: " + count_grab_tha.length + "</br>";
  result += "Total: " + lstOtp.length + "</br></p>";

  res.send(result);
  
});
 
module.exports = router;