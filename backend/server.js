//entry point to the server
//nmp run server(package.json)

const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT ||5000 ;

const app = express()


app.use('/api/goals', require('./routes/goalRoutes'))            

app.listen(port, () => console.log(`Server listen in port ${port}`)) 