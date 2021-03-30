const express = require('express')
const mongoose = require('mongoose')
const config = require('./config/config') 

const app = express()

mongoose.connect(
    config.URLDB,
    {
        useNewUrlParser:true,
        useUnifiedTopology:true,
        useCreateIndex:true
    })

console.log(config)

app.listen(config.PORT,
    ()=>{
        console.log(`Server running on port http://localhost${config.PORT}`)
    }
)





