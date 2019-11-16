let list = [];

let myIndex = 0;

function Start(){
    getData();
    carousel();
}


/*Slide Show*/
function carousel() {
    let i;
    let x = document.getElementsByClassName("mySlides");
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
async function calc(productid,  response){
    // alert('4');
    let da;
    if(response.ok){
        let da = await response.json();
        // console.log(da);
        // alert('5')
        let max = 0;
        for(let i=0 ; i<da.length ; i++){
            let obj = da[i];
            if(productid === obj.Pid){
                if(obj.BidPlaced >= max){
                    max = obj.BidPlaced;
                }
            }
        }
        // alert('6')
        // console.log('max = ',max)
        list.push(max)
        // alert('7')
    }
}


async function transfer1(val){
    // alert('2')
    for(let i = 0; i < val.length; i++) {
        // alert('3')
        let obj = val[i];
        let response = await fetch('http://localhost:3000/customerProduct/item');
        calc(obj._id, response)
        // alert(window.list)
    }
}

function transfer(val){
    // alert('8')
    // console.log(list)
    let e = document.getElementById("grid"); // whatever you want to append the rows to:
    for(let i = 0; i < val.length; i++) {
        let obj = val[i];
        let row = document.createElement("div");
        row.className = "item"+new String(i);
        let cell = document.createElement("a");
        cell.href ="customerproduct.html";
        cell.style.textDecoration = 'none';
        // alert('9')
        cell.innerText = obj.ProductName+"\n"+obj.Quantity+' '+obj.Unit+"\n"+"Starting Bid: ₹"+obj.StartingBid+'\n'+'Current Bid: ₹'+list[i]+"\n"+obj.Location+"\n"+"Product ID: "+obj._id;
        row.appendChild(cell);
        e.appendChild(row);
    }
}

//get data from farmerProduct.
function getData(){
    let dat;
    // alert('1')
    fetch(`http://localhost:3000/farmerProduct/item`)
        .then(res => res.json())
        .then(data => dat =data)
        .then(() => transfer1(dat))
        .then(() => transfer(dat))
}
