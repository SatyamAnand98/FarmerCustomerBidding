var farmerUser = "";
var farmerPwd = "";
var customerUser = "";
var customerPwd = "";
var pass;
const farmerproduct = "/home/stoneduser/Desktop/FarmerCustomerBidding/farmerproduct.html";
const customerproduct = "/home/stoneduser/Desktop/FarmerCustomerBidding/customerProfile.html";

function redirectFarmerProduct(form){
    farmerUser = form.funame.value;
    farmerPwd = form.fpsd.value;
    if(farmerUser === "thesatemail@gmail.com") {
        pass = true;
    }
    else{
        pass = false
    }
    if(farmerPwd === "asd"){
        pass = true;
    }
    else{
        pass = false;
    }

    if(pass){
        window.location.href = farmerproduct;
    }
    else{
        alert("Email or Password is wrong");
    }
    return false;
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
    if(customerUser === "thesatemail@gmail.com") {
        pass = true;
    }
    else{
        pass = false
    }
    if(customerPwd === "asd"){
        pass = true;
    }
    else{
        pass = false;
    }

    if(pass){
        window.location.href = customerproduct;
    }
    else{
        alert("Email or Password is wrong");
    }
    return false;
}
