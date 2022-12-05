const express = require("express");
const { MongoClient, ServerApiVersion } = require('mongodb');
const PORT = process.env.PORT || 3001;
const uri = "mongodb+srv://group6:horseNeck2023@reportdata.5sr0hj8.mongodb.net/?retryWrites=true&w=majority";
//const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
const app = express();

//return number of reports in the database
app.get("/reportData", (req, res) => {
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
    client.connect(err => {
        if (err) { console.log("Problems Connecting to database") }
        const collection = client.db("Group6").collection("ReportData");
  
        collection
          .find({})
          .toArray((err, result) => {
            if (err) { throw err; }
            res.json(result.length);
            client.close();
          });
      });
});

//retrun individual report data when /api/schoolName is hit
app.get("/reportData/:schoolName", (req, res) => {
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
   client.connect(err => {
        if (err) { console.log("Problems Connecting to database") }
        const collection = client.db("Group6").collection("ReportData");

        //handle spaces
        var _schoolName = req.params.schoolName;
        _schoolName = _schoolName.replace("+", " ");
        //console.log(_schoolName);
        
        collection
          .find({school: _schoolName})
          .toArray((err, result) => {
            if (err) { 
                console.log(err);
            }
            else{
                //console.log(result.length); 
                res.json(result.length); 
                client.close();
            }    
          });
      });
});

app.get("/allReports", (req, res) => {
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
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
});

//send new report to database
app.use(express.json());
app.post("/", (req, res) =>{
    
    newReportInfo = req.body;
    //res.send(req.body);
    console.log(newReportInfo);
    
    // const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
    // client.connect(err => {
    //     if (err) { console.log("Problems Connecting to database") }
    //     const collection = client.db("Group6").collection("ReportData");

    //     collection.insertOne(newReportInfo, function(err, result){
    //       if (err) { throw err; }
    //       else{
    //         console.log("New report added to reports collection with id " + result.insertedId);
    //       }
    //       client.close(); 
    //     });
    //   });
});

//listener to start it all
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});