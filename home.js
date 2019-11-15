var list = [];

var myIndex = 0;

function Start(){
    getData();
    carousel();
}


/*Slide Show*/
function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}
    x[myIndex-1].style.display = "block";
    setTimeout(carousel, 2000); // Change image every 2 seconds
}

/*page redirecting*/
function redirectLogin() {
  window.location = "file:///home/stoneduser/Desktop/FarmerCustomerBidding/login.html";
}

function redirectFarmerProfile(){
    window.location = "file:///home/stoneduser/Desktop/FarmerCustomerBidding/farmerProfile.html"
}


//Calculate Heighest Bid
function calc(productid){
    fetch('http://localhost:3000/customerProduct/item')
        .then(res => res.json())
        .then(data => {
            var max = 0;
            for(var i=0 ; i<data.length ; i++){
                var obj = data[i];
                if(productid === obj.Pid){
                    if(obj.BidPlaced >= max){
                        max = obj.BidPlaced;
                    }
                }
            }
            window.list.push(max)
        });
}


function transfer1(val){
    for(var i = 0; i < val.length; i++) {
        var obj = val[i];
        calc(obj._id)
        // alert(window.list)
    }
}

function transfer(val){
    console.log(window.list)
    var e = document.getElementById("grid"); // whatever you want to append the rows to:
    for(var i = 0; i < val.length; i++) {
        var obj = val[i];
        var row = document.createElement("div");
        row.className = "item"+new String(i);
        var cell = document.createElement("a");
        cell.href ="customerproduct.html";
        cell.style.textDecoration = 'none';
        cell.innerText = obj.ProductName+"\n"+obj.Quantity+' '+obj.Unit+"\n"+"Starting Bid: ₹"+obj.StartingBid+'\n'+"Current Bidding: ₹"+window.list[i]+"\n"+obj.Location+"\n"+"Product ID: "+obj._id;
        row.appendChild(cell);
        e.appendChild(row);
    }
}

//get data from farmerProduct.
function getData(){
    fetch('http://localhost:3000/farmerProduct/item')
        .then(res => res.json())
        .then(data => {
            transfer1(data);
            setTimeout(6000000)
            transfer(data);
        });
}
