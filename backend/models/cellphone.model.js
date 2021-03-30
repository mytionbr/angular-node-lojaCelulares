const mongoose = require('mongoose')

const cellphoneSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    brand:{
        type:String,
        required:true,
        trim:true
    },
    price:{
        type:Number,
        required:true,
    },
    imageLink:{
        type:String,
        trim:true
    },
    colors:{
        type:[String],
    },
    description:{
        type:String,
    },
    memoryStorage:{
        type:Number,
        required:true,
    }
})

module.exports = mongoose.model('Cellphone',cellphoneSchema)