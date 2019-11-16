let farmerUser = "";
let farmerPwd = "";
let customerUser = "";
let customerPwd = "";
const farmerproduct = "/home/stoneduser/Desktop/FarmerCustomerBidding/farmerproduct.html";
const customerproduct = "/home/stoneduser/Desktop/FarmerCustomerBidding/customerProfile.html";


function redirectFarmerProduct(){
    farmerUser = document.getElementById("Funame").value;
    farmerPwd = document.getElementById("Fpwd").value;
    let FarmerId='';
    let Fpwd='';
    let data2;

    fetch('http://localhost:3000/farmerLogin/item')
        .then(response => response.json())
        .then(data => data2 = data)
        .then(setTimeout(3000))
        .then(() => transferfarmer(data2))

    function transferfarmer(val){
        for(let i = 0; i < val.length; i++) {
            let obj = val[i];
            if(obj.Email === farmerUser){
                Fpwd = obj.Password;
                FarmerId = obj._id;
                localStorage.setItem('FarmerID', FarmerId);
                if(String(farmerPwd) === String(Fpwd)) {
                    window.location.href = farmerproduct;
                }
                else{
                    alert("Email or Password is wrong");
                }
                return false;
            }
        }
    }
}

/*page redirecting*/
function redirectHome(){
    window.location = "file:///home/stoneduser/Desktop/FarmerCustomerBidding/home.html";
}

function redirectcustomerSignup(){
    window.location = "file:///home/stoneduser/Desktop/FarmerCustomerBidding/customerSignup.html";
}

function redirectfarmerSignup(){
    window.location = "file:///home/stoneduser/Desktop/FarmerCustomerBidding/farmerSignup.html";
}


function redirectCustomerProfile(){
    customerUser = document.getElementById("Cuname").value;
    customerPwd = document.getElementById("Cpwd").value;
    let CustomerId='';
    let Cpwd='';
    let data2;
    fetch('http://localhost:3000/customerLogin/item')
        .then(response => response.json())
        .then(data => data2 = data)
        .then(setTimeout(3000))
        .then(() => transfercustomer(data2))

    function transfercustomer(val){
        for(let i = 0; i < val.length; i++) {
            let obj = val[i];
            if(obj.Email === customerUser){
                Cpwd = obj.Password;
                CustomerId = obj._id;
                localStorage.setItem('CustomerID', CustomerId);
                if(String(customerPwd) === String(Cpwd)) {
                    window.location.href = customerproduct;
                }
                else{
                    alert("Email or Password is wrong");
                }
                return false;
            }
        }
    }
}
