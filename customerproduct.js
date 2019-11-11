/*pop up window*/
function openTab(tabName) {
  var i, x;
  x = document.getElementsByClassName("containerTab");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(tabName).style.display = "block";
}

/*page redirecting*/
function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}


/*Changing Inner Text*/


var number=localStorage.getItem('data');
var pName;

function getData(){
    fetch('http://localhost:3000/farmerProduct/item')
        .then(response => response.json())
        .then(data => transfer(data))
}

function transfer(val){
    for(var i = 0; i < val.length; i++) {
        var obj = val[i];
        if(obj._id === number){
            document.getElementById('Pname').innerText = obj.ProductName;
            pName = obj.ProductName;
            document.getElementById('Quantity').innerText = obj.Quantity+' '+obj.Unit;
            document.getElementById('Sbid').innerText = "₹"+obj.StartingBid;
            document.getElementById('Cbid').innerText = "₹"+obj.HeighestBid;
            document.getElementById('Location').innerText = obj.Location;
        }
    }
}


function dataRetreival(){

    /*reading entered data*/
    var test={
        name : document.getElementById("nm").value,
        email : document.getElementById("em").value,
        ph :  document.getElementById("ph").value,
        Bid :  document.getElementById("bid").value,
        // Message :  document.getElementById("ms").value,
    };

    fetch('http://localhost:3000/customerProduct/itempost', {
        method: 'post',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
         body: JSON.stringify({
            Pid:number,
            ProductName: pName,
            Name : test.name,
            Email : test.email,
            Phone : test.ph,
            BidPlaced : test.Bid
            })
    })
    .then((res)=>{
    console.log(res);
    });
}

var PID = number;

