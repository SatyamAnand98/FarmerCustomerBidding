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
// alert(number);
// var number = '5dbc6e8152bdce05e5768367';

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
            document.getElementById('Quantity').innerText = obj.Quantity+' '+obj.Unit;
            document.getElementById('Sbid').innerText = "₹"+obj.StartingBid;
            document.getElementById('Cbid').innerText = "₹"+obj.HeighestBid;
            document.getElementById('Location').innerText = obj.Location;
        }
    }
}
