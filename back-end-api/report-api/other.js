//file to test exporting modules
//shows the useage of each of the function from report-api.js in an
//external file

var reportAPI = require('./databaseInterface.js');

//hitting an endpoint and getting all the reports as json objects:
//var x = reportAPI.startServer();
//var y = reportAPI.getAllReportsAtEndPoint();

//getting back all reports as an array of json objects:
// reportAPI.getAllReports(function (err, allReports) {
//   if (!err) {
//     console.log(allReports)
//   }
// });

//getting back a number of all reports for a given school:
// reportAPI.getNumberOfReports("Towson University", function (err, count) {
//     if (!err) {
//       console.log(count);
//     }
// });


// //submitting a new report:
// var sampleReport = {"school": "Towson University",  "onCampus": true,  "studentBody": false,  "faculty": false,  
// "employee": true,  "aquantince": true,  "reportSchool": true,  "reportLaw": false,  "reportID": 2,  "comments": "a lot of letters"};
// reportAPI.submitReport(sampleReport);


//verifying username and password
// reportAPI.verifyUser("drDooLittle", "12345", function(err, valid){
//     if(valid == true){
//         console.log("User DOES Exist");
//     }
//     else{
//         console.log("User DOESNT Exist");
//     }
// });
