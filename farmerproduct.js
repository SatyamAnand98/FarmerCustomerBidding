// var MongoClient = require('mongodb').MongoClient;
// import mongodb from 'mongodb';
// var MongoClient = mongodb.MongoClient;

// var url = "mongodb://localhost:27017/";
// var v=12;
// var productName;

/*page redirecting*/
function redirectFarmerProfile(){
    window.location = "file:///home/stoneduser/Desktop/FarmerCustomerBidding/farmerProfile.html"
}

/*reading entered data*/
function dataRetreival(){
    var e = document.getElementById("unit");
    // console.log(e);
    var info={
        productName : document.getElementById("productName").value,
        startingBid : document.getElementById("StartingBid").value,
        quantity :  document.getElementById("quantity").value,
        locality : document.getElementById("location2").value,
        unit : e.options[e.selectedIndex].value,
    };
    console.log(info)
}
    //Storing to database
    // MongoClient.connect(url, function(err, db) {
    //     if (err) throw err;
    //     var dbo = db.db("FarmerPlot");
    //     var myobj = { "ProductName":info.ProductName,"StartingBid":info.startingBid,"Quantity":info.quantity,"Unit":info.unit,"Location":info.locality};
    //     dbo.collection("farmerProduct").insertOne(myobj, function(err, res) {
    //         if (err) throw err;
    //         console.log("1 document inserted");
    //         db.close();
    //     });
    // });
// }


