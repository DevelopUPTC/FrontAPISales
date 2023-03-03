
function loadCustomers(){
    return new Promise((resolve,reject)=>{
        const data = fetch('http://localhost:3000/customers')
        .then( res => res.json( ) )
        .then( res => {
            resolve( res )
        })
        .catch( err => reject( err ) )
    })
}

const loadValues = ()=>{
    
    const number = document.getElementById('number').value 

    const valBill = parseInt(document.getElementById('valBill').value)

    const dateBill = document.getElementById('dateBill').value

    const data = {"number":number, "dateBill":dateBill,"value":valBill}

    return JSON.stringify(data)
}

function sendCustomer(){
    const data = loadValues()
    const customer = document.getElementById('customer').value 

    const URL = `http://localhost:3000/bills/${customer}`
    fetch(URL,
    {
        method:'POST',
        headers:{
            "Content-Type": "application/json",
        },
        body:data
    })
    .then( resp => resp.json())
    .then( data => {
        if( data.result ){
            alert('Todo Bien')
        }else{
            alert('[Error]-Factura ya Existe')
        }
    })
    .catch(err => alert('Ohhh,algo ha pasado' + err))
}