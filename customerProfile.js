CID = localStorage.getItem('CustomerID');
function transfer(val){
    let e = document.getElementById("nm"); // whatever you want to append the rows to:
    for(let i = 0; i < val.length; i++) {
        let obj = val[i];
        if(obj._id === CID){
            let row = document.createElement("p");
            row.innerText = obj.Name+"\n\n+91-"+obj.Phone+'\n\n'+obj.Email
            e.appendChild(row);
        }
    }
}

function start(){
    fetch(`http://localhost:3000/customerLogin/item`)
    .then(res => res.json())
    .then(data => transfer(data))
}
