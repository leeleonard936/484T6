//best resource for linking RESTful APIs and MongoDB
//https://www.mongodb.com/languages/express-mongodb-rest-api-tutorial

//how to return from monogodb async functions
//https://stackoverflow.com/questions/25473650/mongodb-get-the-number-of-documents-count-in-a-collection-using-node-js

//to find an exact match for a mongo query:
//https://www.tutorialspoint.com/mongodb-query-for-exact-match-on-multiple-document-fields

const express = require("express");
const { MongoClient, ServerApiVersion } = require('mongodb');
const PORT = process.env.PORT || 3001;
const uri = "mongodb+srv://group6:horseNeck2023@reportdata.5sr0hj8.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
const app = express();

//starts the server
  //cant tell if I need this or not...
  //is it just so I can hit the endpoint?
function startServer() {

  app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  })

};

//reading all documents from ReportData Collection when website hits 
// "/api" which will be changed to "/researcher"
function getAllReportsAtEndpoint() {
  app.get("/api", (req, res) => {
    client.connect(err => {
      if (err) { console.log("Problems Connecting to database") }
      const collection = client.db("Group6").collection("ReportData");

      collection
        .find({})
        .toArray((err, result) => {
          if (err) { throw err; }
          res.json(result);
          client.close();
        });
    });
  })
};

//returns all documents from ReportData Collection as a function
//return type will be an array of json objects
function getAllReports(callback) {
  client.connect(err => {
    if (err) { console.log("Problems Connecting to database") }
    const collection = client.db("Group6").collection("ReportData");

    collection
      .find({})
      .toArray((err, result) => {
        if (err) { callback(err); }
        client.close();
        callback(null, result);
      });
  });
};

//returns the number of times a school name shows up in the report collection
//as a type num
function getNumberOfReports(schoolName, callback) {

  client.connect(err => {
    
    if (err) { console.log("Problems Connecting to database") }
    const collection = client.db("Group6").collection("ReportData");

    collection
      .find({school: schoolName})
      .toArray((err, result) => {
        if (err) { return callback(err); }
        
        client.close();  

        callback(null, result.length);
      });
  });
};

//submits a report 
//pass in a json object, result logged to the console
function submitReport(newReportInfo) {
  client.connect(err => {
    if (err) { console.log("Problems Connecting to database") }
    const collection = client.db("Group6").collection("ReportData");

    collection.insertOne(newReportInfo, function(err, result){
      if (err) { throw err; }
      else{
        console.log("New report added to reports collection with id " + result.insertedId);
      }
      client.close(); 
    });
  });
};

//verify user
//will return error if nothing found, will return true if 
//userName and password combination exists
function verifyUser(_userName, _password, callback){
  client.connect(err => {
    
    if (err) { console.log("Problems Connecting to database") }
    const collection = client.db("Group6").collection("VerifiedUsers");

    collection
      .find({'$and': [{'userName': {'$in': [_userName]}, 'password': {'$in': [_password]}}]})
      .toArray((err, result) => {
        if (err) { return callback(err); }
        
        client.close(); 
        //console.log(result);
        
        if(result.length == 0){
          callback(null, false);
        }
        else{
          callback(null, true)
        };
        
      });
  });
};




//call each function to test
//if these test functions arent commented out, then they will execute when this file is 
//required/imported else where
//console.log("I will print from inside report-api.js when this file is imported");
//startServer();

//useage of getNumberOfReports():
// getNumberOfReports("Towson University", function (err, count) {
//   if (!err) {
//     console.log(count);
//   }
// });

//useage of getAllReports
// getAllReports(function (err, allReports) {
//   if (!err) {
//     console.log(allReports)
//   }
// });

//to call functions from another file:
module.exports = {startServer, getAllReportsAtEndpoint, 
  getAllReports, getNumberOfReports, submitReport, verifyUser};