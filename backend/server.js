//entry point to the server
//nmp run server(package.json)

const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT ||5000 ;

const app = express()
//add middleware
app.use(express.json()) //accept data from body
app.use(express.urlencoded({extended : false}))

app.use('/api/goals', require('./routes/goalRoutes'))            

app.listen(port, () => console.log(`Server listen in port ${port}`)) 