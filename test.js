var MongoClient = require('mongodb').MongoClient;
//Create a database named "Test":
var url = "mongodb://localhost:27017/FarmerPlot";

//Database Created
/**
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});
**/


//Collection Created
/**
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("Test");
  //Create a collection name "customers":
  dbo.createCollection("farmerProduct", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
    db.close();
  });
});
**/

//Insertion
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("FarmerPlot");
  var myobj = { "ProductName":"Milk","StartingBid":600,"Quantity":10,"Unit":"ltrs","Location":"Bangalore"};
  dbo.collection("farmerProduct").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});
