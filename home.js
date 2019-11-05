var myIndex = 0;
// /*Slide Show*/

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


/**Adding new bids dynamically**/
function genDivs(v)
{
    var e = document.getElementById("grid"); // whatever you want to append the rows to:
    for(var i = 1; i <= v; i++)
    {
        var row = document.createElement("div");
        row.className = "item"+new String(i);
        var cell = document.createElement("a");
        cell.href ="customerproduct.html";
        cell.style.textDecoration = 'none';
        cell.innerText = String(i)+"\n"+"Product Name"+"\n"+"Quantity"+"\n"+"Starting Bid"+"\n"+"Current Bid"+"\n"+"Rating";
        row.appendChild(cell);
        e.appendChild(row);
    }
    console.log(e);
}
genDivs(24);
