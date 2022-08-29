const dotenv = require('dotenv')
const mongoose = require('mongoose')
const express = require('express')
const app = express()

//below is for DB connection which is in db folder
dotenv.config({ path : './config.env'});
require('./db/conn')

//converts any data we get from application converted to json :)
app.use(express.json())

//we link the router files to make our route easy
app.use(require('./router/auth'))



const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`server is running at port ${PORT}`)
})