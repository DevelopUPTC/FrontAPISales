const express = require('express')

const path = require('path')

const app = express()

//settings
app.set('PORT',process.env.PORT || 3000 )

//middlewares
app.use(express.json())
app.use(express.static(path.join(__dirname,'./public')))

//routes
app.use('/',require('./routes/index'))

app.listen(app.get('PORT'),()=>console.log(`Server listen at Port ${app.get('PORT')}`))