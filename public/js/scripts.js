console.log('Script de Inicio')
fetch('http://localhost:3000/customers')
.then( resp => resp.json())
.then( data => {
    const tbody = document.getElementById('tbody')
    console.log(data)
    data.data.forEach(element => {
        const tr = document.createElement('tr')

        const colCode = document.createElement('td')
        colCode.appendChild(document.createTextNode(element.nit))
        tr.appendChild(colCode)

        const colName = document.createElement('td')
        colName.appendChild(document.createTextNode(element.name))
        tr.appendChild(colName)

        const colBirth = document.createElement('td')
        colBirth.appendChild(document.createTextNode(element.birthday))
        tr.appendChild(colBirth)
        tbody.appendChild(tr)
    });
})
.catch(err=>console.log)

document.getElementById('btnSend').addEventListener('click',()=>{
    console.log('Enviar')
})