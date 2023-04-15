const {OtpModel, PhoneModel} = require('./farm-0-db');
const express=require('express');
const router = express.Router();
// const axios = require('axios');

// var request=require('request-promise');


// router.get('/otp/report', async (req, res) => {

// var date=new Date();
// const previous=new Date(date.setDate(date.getDate()-1));

// var previous_month = (date.getMonth() + 1);
// console.log(previous_month);
// if (previous_month < 10) {
//   previous_month = "0" + previous_month;
// }

// var previous_day = previous.getDate();
// console.log(previous_day);
// if (previous_day < 10) {
//   previous_day = "0" + previous_day;
// }

// var current_month = (date.getMonth() + 1);
// if (current_month < 10) {
//   current_month = "0" + current_month;
// }

// var current_day = date.getDate();
// if(current_day < 10) {
//   current_day = "0" + current_day;
// }


//   const startDate = previous.getFullYear() + previous_month + previous_day + "235900";
//   const endDate = "" + date.getFullYear() + current_month + current_day + "235900";

//   var options = {
//     uri: "https://smsgatewayprod.vdtsecurity.vn/v2/otps?start="+ startDate +"&end="+ endDate +"&limit=1&provider=Facebook",
//     method: "GET",
//     headers: {
//         'Authorization': ''
//       },
//     json: true
//   }

//   const params = {
//     start: startDate,
//     end: endDate,
//     limit: 1,
//     provider: 'Facebook'
//   };


//   const url = "https://smsgatewayprod.vdtsecurity.vn/v2/otps";
//   const instance=axios.create({
//     headers:{
//         'Content-Type':'application/json',
//         'Acess-Control-Allow-Origin':'*',
//         'Authorization':`Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NDBhODE1MGI2ZTliMzAwMjczNWRiOGQiLCJpYXQiOjE2ODEzMDY5MDMsImV4cCI6MTY4MjUxNjUwMywidHlwZSI6ImFjY2VzcyJ9.AzUWpCiSJtY12tUWA-CS60E8BsYWrNwlGYAFGZ2Mfyg`,
//         'Accept': "application/json"
//         }
//     })
//   const data = await instance.get(url, params);
//   console.log(data);
//   console.log(url);
//   res.send("data");
  



//   //const data = await OtpModel.aggregate().sortByCount("branch_type");
//   // const lstOtp = await OtpModel.find(filter);
  
//   // const count_google_tha = lstOtp.filter(x => x.branch_type == 'Google');
//   // const count_facebook_tha = lstOtp.filter(x => x.branch_type == 'Facebook');
//   // const count_line_tha = lstOtp.filter(x => x.branch_type == 'Line');
//   // const count_bigo_tha = lstOtp.filter(x => x.branch_type == 'Bigo');
//   // const count_discord_tha = lstOtp.filter(x => x.branch_type == 'Discord');
//   // const count_grab_tha = lstOtp.filter(x => x.branch_type == 'Grab');
  
//   // var result = current_date + "-" + timestamp.getTime() + " <b></br>Farm 0</b></br>";
//   // result += "<p id='farm0' total='" + lstOtp.length + "'><b>Team Thắng: 90k</b></br>"
//   // result += "Google: " + count_google_tha.length + "</br>";
//   // result += "Facebook: " + count_facebook_tha.length + "</br>";
//   // result += "Line: " + count_line_tha.length + "</br>";
//   // result += "Bigo: " + count_bigo_tha.length + "</br>";
//   // result += "Discord: " + count_discord_tha.length + "</br>";
//   // result += "Grab: " + count_grab_tha.length + "</br>";
//   // result += "Total: " + lstOtp.length + "</p>";

//   //res.send(startDate);
  
// });

router.get('/otp/report', async (req, res) => {
  var current_date = new Date().toLocaleDateString();
  var timestamp = new Date(current_date);
  const filter = {timestamp: timestamp.getTime()};

  //const data = await OtpModel.aggregate().sortByCount("branch_type");
  const lstOtp = await OtpModel.find(filter);
  
  const count_google_tha = lstOtp.filter(x => x.branch_type == 'Google');
  const count_facebook_tha = lstOtp.filter(x => x.branch_type == 'Facebook');
  const count_line_tha = lstOtp.filter(x => x.branch_type == 'Line');
  const count_bigo_tha = lstOtp.filter(x => x.branch_type == 'Bigo');
  const count_discord_tha = lstOtp.filter(x => x.branch_type == 'Discord');
  const count_grab_tha = lstOtp.filter(x => x.branch_type == 'Grab');
  const count_agoda = lstOtp.filter(x => x.branch_type == 'Agoda');
  const count_apple = lstOtp.filter(x => x.branch_type == 'Apple');
  const count_kucoin = lstOtp.filter(x => x.branch_type == 'KuCoin');

  
  var result = "<p>" + current_date + "-" + timestamp.getTime() + " <b></br>Farm 0</b></br>";
  result += "<b id='farm0' total='" + lstOtp.length + "'>Team Thắng: 90k</b></br>"
  result += "Google: " + count_google_tha.length + "</br>";
  result += "Facebook: " + count_facebook_tha.length + "</br>";
  result += "Line: " + count_line_tha.length + "</br>";
  result += "Bigo: " + count_bigo_tha.length + "</br>";
  result += "Discord: " + count_discord_tha.length + "</br>";
  result += "Grab: " + count_grab_tha.length + "</br>";
  result += "Agoda: " + count_agoda.length + "</br>";
  result += "Apple: " + count_apple.length + "</br>";
  result += "Kucoin: " + count_kucoin.length + "</br>";
  result += "Total: " + lstOtp.length + "</p>";

  res.send(result);
  
});
 
module.exports = router;