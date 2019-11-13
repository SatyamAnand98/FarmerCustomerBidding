var farmerUser = "";
var farmerPwd = "";
var customerUser = "";
var customerPwd = "";
const farmerproduct = "/home/stoneduser/Desktop/FarmerCustomerBidding/farmerproduct.html";
const customerproduct = "/home/stoneduser/Desktop/FarmerCustomerBidding/customerProfile.html";



function redirectFarmerProduct(){
    farmerUser = document.getElementById("Funame").value;
    farmerPwd = document.getElementById("Fpwd").value;
    var FarmerId='';
    var Fpwd='';

    start();

    async function start(){
        await callingFetch();
        // await transferfarmer();
    }

    async function callingFetch(){
        const response = await fetch('http://localhost:3000/farmerLogin/item')
        const json = await response.json();
        await transferfarmer(json);
    }

// fetch('http://localhost:3000/farmerLogin/item')
//         .then(response => response.json())
//         .then(data => transferfarmer(data))


    async function transferfarmer(val){
        for(var i = 0; i < val.length; i++) {
            var obj = val[i];
            // alert('inside')
            setTimeout(5000);
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
        return 0;
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


function redirectCustomerProfile(form){
    customerUser = form.cuname.value;
    customerPwd = form.cpsd.value;
    var CustomerId='';
    var Cpwd='';
    fetch('http://localhost:3000/customerLogin/item')
        .then(response => response.json())
        .then(data => transferfarmer(data))

    function transferfarmer(val){
        for(var i = 0; i < val.length; i++) {
            var obj = val[i];
            if(obj.Email === customerUser){
                Cpwd = obj.Password;
                CustomerId = obj._id;
                localStorage.setItem('CustomerID', CustomerId);
                if(String(customerPwd) === String(Cpwd)) {
                    pass = true;
                }
                else{
                    pass = false
                }

                if(pass){
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

