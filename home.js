var myIndex = 0;
var list = []
var temp;

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
    const maxima = fetch('http://localhost:3000/customerProduct/item')
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
            // return max
        })
        var val;
        val = maxima.then(function(res){
            return res.text();
        })
        console.log(val)
    // let response = fetch(maxima);

    // let commits = maxima.then(response => response.json()); // read response body and parse as JSON

    // alert(commits[0]);
}

//get data from farmerProduct.
function getData(){
    fetch('http://localhost:3000/farmerProduct/item')
        .then(res => res.json())
        .then(data => transfer(data))
}

function transfer(val){
    var max = 0;
    var e = document.getElementById("grid"); // whatever you want to append the rows to:
    for(var i = 0; i < val.length; i++) {
        var obj = val[i];
        var row = document.createElement("div");
        row.className = "item"+new String(i);
        var cell = document.createElement("a");
        cell.href ="customerproduct.html";
        cell.style.textDecoration = 'none';
        calc(obj._id)
        cell.innerText = obj.ProductName+"\n"+obj.Quantity+' '+obj.Unit+"\n"+"Starting Bid: ₹"+obj.StartingBid+'\n'+"Current Bidding: ₹"+max+"\n"+obj.Location+"\n"+"Product ID: "+obj._id;
        row.appendChild(cell);
        e.appendChild(row);
    }
    // console.log(list+' called from iniside')
}


var intendedElement = document.getElementById('grid');
var text;
document.addEventListener('click', function(e) {

    if(intendedElement.contains(e.target)){
        e = e || window.event;
        target = e.target || e.srcElement,
        text = target.textContent || target.innerText;
        text = text.substring(text.length - 24, text.length);
        alert(text);
        localStorage.setItem('Pid', text);
    }
}, false);
