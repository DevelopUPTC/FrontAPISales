
fetch('http://localhost:3000/customers')
.then( resp => resp.json())
.then( data => {
    const customer = document.getElementById('customer')
    data.data.forEach( element => {
        customer.add( new Option(element.name,element._id))
    })
})
.catch(err=>console.log)

const send = async( data,customer )=>{
    const URL = `http://localhost:3000/bills/${customer}`
    alert(URL)
    await fetch(URL,
    {
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:data
    })
    .then( resp => resp.json())
    .then( resp => alert(resp))
    .catch(err => alert('Ohhh,algo ha pasado' + err))

    //return result.json()
}

document.getElementById('btnSend').addEventListener('click',()=>{
    const number = document.getElementById('number').value 

    const customer = document.getElementById('customer').value 

    const valBill = document.getElementById('valBill').value

    const dateBill = document.getElementById('dateBill').value

    const data = {"number":number, "dateBill":dateBill,"value":valBill}

    send( JSON.stringify(data),customer )
    //.then( resp => alert(resp))
})