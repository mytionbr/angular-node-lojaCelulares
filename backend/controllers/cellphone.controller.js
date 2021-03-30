const express = require('express')
const Cellphone = require('../models/cellphone.model')
const router = express.Router()

const createCellphone = async (req,res) =>{
    let cellphone = new Cellphone()
    cellphone.name = req.body.name
    cellphone.brand = req.body.brand
    cellphone.price = req.body.price
    cellphone.imageLink = req.body.imageLink
    cellphone.colors = req.body.colors
    cellphone.description = req.body.description
    cellphone.memoryStorage = req.body.memoryStorage

    try{
        await cellphone.save()
        send()
    }catch(e){
        console.log(e)
    }
}

const getCellphone = async (req,res) =>{
    Cellphone.find({}).then((results =>{
        let cellphones = results.filter(async cellphone => cellphone)
        res.send(cellphones)
    })
    )
}

const 