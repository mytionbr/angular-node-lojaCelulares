const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const config = require('./config/config') 
const routers = require('./routers/cellphone.router')

const app = express()

mongoose.Promise = global.Promise;

mongoose.connect(
    config.URLDB,
    {
        useNewUrlParser:true,
        useUnifiedTopology:true,
        useCreateIndex:true
    }).then(()=>{
        console.log("Connected to the database")
    }).catch((err)=>{
        console.log("Cannot connect to the database",err)
        process.exit()
    })



app.use(cors())

app.use(express.json());

app.use(express.urlencoded({extended:true}))

app.get("/",(req,res)=>{
    res.json({message:"testando a api"})
})

app.use('/cellphones',routers)

app.listen(config.PORT,
    ()=>{
        console.log(`Server running on port http://localhost${config.PORT}`)
    }
)





