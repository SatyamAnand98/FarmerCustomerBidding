let CID = localStorage.getItem('CustomerID');
let FID="";
let obj1;

function getData(){

    fetch('http://localhost:3000/customerLogin/item')
    .then(response => response.json())
    .then(data => retreive(data))

    function retreive(vals){

        for(let i = 0;i < vals.length;i++){
            let obj = vals[i];
            if(obj._id === FID){
                document.getElementById("nam").innerText ="Name: " + obj.Name;
                document.getElementById("ph").innerText ="Phone: +91-" + obj.Phone;
                document.getElementById("em").innerText ="Email: " + obj.Email;

                fetch('http://localhost:3000/customerProduct/item')
                .then(response => response.json())
                .then(data => currentBid(data))

                function currentBid(val){

                    for(let j = 0;j<val.length;j++){
                        obj1 = val[j];
                        if((CID === obj1.Fid) && (obj1.__v === 0)){
                            forCurrent();
                        }
                    }
                }
            }
        }
    }
    setData();
}

function forCurrent(){

    fetch('http://localhost:3000/farmerCurrentBid/itempost',{
        method:'post',
        headers:{'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
        body: JSON.stringify({
            ProductName: obj1.ProductName,
            _id: obj1._id,
            fid:obj1.Fid,
            Price: obj1.HeighestBid
        })
    })
    .then((res) =>{console.log(res);
    });
}

function setData(){

    fetch('http://localhost:3000/farmerCurrentBid/item')
    .then(res => res.json())
    .then(data => transfer(data))

    function transfer(gain){
        let e = document.getElementById('tbc');
        for( let i = 0;i<gain.length;i++){
            let obj = gain[i];
            if(FID === obj.fid){


                let outer = document.createElement('tr');

                let pNametd = document.createElement('td');
                let pIDtd = document.createElement('td');
                let pricetd = document.createElement('td');
                let canceltd = document.createElement('td')

                let pNamep = document.createElement('p');
                pNamep.className = "tx2";
                pNamep.style.textAlign = 'center';
                pNamep.style.color = 'black';
                let pIDp = document.createElement('p');
                pIDp.className = "tx2";
                pIDp.style.textAlign = 'center';
                pIDp.style.color = 'black';
                let pricep = document.createElement('p');
                pricep.className = "tx2";
                pricep.style.textAlign = 'center';
                pricep.style.color = 'black';
                let cancelp = document.createElement('button');
                let canceli = document.createElement('i');
                canceli.className = "fa fa-close";

                pNamep.innerText = obj.ProductName;
                pIDp.innerText = obj._id;
                pricep.innerText = obj.Price;

                pNametd.appendChild(pNamep);
                pIDtd.appendChild(pIDp);
                pricetd.appendChild(pricep);
                cancelp.appendChild(canceli);
                canceltd.appendChild(cancelp);

                outer.appendChild(pNametd);
                outer.appendChild(pIDtd);
                outer.appendChild(pricetd);
                outer.appendChild(canceltd);

                e.appendChild(outer)
            }
        }
    }
}
