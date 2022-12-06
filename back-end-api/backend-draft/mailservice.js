const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

var request = require('request');
var nodemailer = require('nodemailer');
var creds = {
    "to" : "client.nodemail.mail2022@gmail.com",
    "from" : "client.nodemail.mail2022@gmail.com",
    "sender_email" :  "client.nodemail.mail2022@gmail.com",
    "sender_password" : "avqdjbmnwndftlfh"
}
let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: creds.sender_email,
        pass: creds.sender_password
    }
})
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });
var json = '' //import JSON from client

var mydata = {
    from: creds.from,
    to: creds.to,
    subject: "SaStat contact form",
    plain: json,
    html: content
}
if(content!=''){
    transporter.sendMail(mydata)
}





