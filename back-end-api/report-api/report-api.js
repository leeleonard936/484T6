//best resource for linking RESTful APIs and MongoDB
//https://www.mongodb.com/languages/express-mongodb-rest-api-tutorial

const express = require("express");
const { MongoClient, ServerApiVersion } = require('mongodb');
const PORT = process.env.PORT || 3001;
const uri = "mongodb+srv://group6:horseNeck2023@reportdata.5sr0hj8.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
const app = express();

//reading all documents from ReportData Collection
app.get("/api", (req, res) => {
  client.connect(err => {
    if(err){console.log("Problems Connecting to database")}
    const collection = client.db("Group6").collection("ReportData");
    
    collection
    .find({})
    .toArray((err, result) => {
        if(err){throw err;}
        res.json(result);
        client.close();
    });
  });
});


app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});