var myIndex = 0;


function getData(){
    fetch('http://localhost:3000/farmerProduct/item')
        .then(response => response.json())
        .then(data => transfer(data))
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

function Start(){
    getData();
    carousel();
}


/*page redirecting*/
function redirectLogin() {
  window.location = "file:///home/stoneduser/Desktop/FarmerCustomerBidding/login.html";
}

function redirectFarmerProfile(){
    window.location = "file:///home/stoneduser/Desktop/FarmerCustomerBidding/farmerProfile.html"
}


function transfer(val){
    var e = document.getElementById("grid"); // whatever you want to append the rows to:
    for(var i = 0; i < val.length; i++) {
        var obj = val[i];
        var row = document.createElement("div");
        row.className = "item"+new String(i);
        var cell = document.createElement("a");
        cell.href ="customerproduct.html";
        cell.style.textDecoration = 'none';
        cell.innerText = "Product Name: "+obj.ProductName+"\n"+"Quantity: "+obj.Quantity+"\n"+"Starting Bid: "+obj.StartingBid+"\n"+"Location: "+obj.Location+"\n"+"Product ID: "+obj._id;
        row.appendChild(cell);
        e.appendChild(row);
    }
}

var intendedElement = document.getElementById('grid');
var text;
document.addEventListener('click', function(e) {

    if(intendedElement.contains(e.target)){
        e = e || window.event;
        target = e.target || e.srcElement,
        text = target.textContent || target.innerText;
        text = text.substring(text.length - 24, text.length);
        // alert(text);
        localStorage.setItem('data', text);
    }
}, false);


