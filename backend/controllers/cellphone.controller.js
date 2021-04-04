const express = require('express')
const Cellphone = require('../models/cellphone.model')
const router = express.Router()

exports.create = async (req,res) =>{
  
    if(!req.body.name){
        res.status(400).send({message:"Name can not be empty!"})
        return
    }

    let cellphone  = new Cellphone({
        name: req.body.name,
        brand: req.body.brand,
        price: req.body.price,
        imageLink:  req.body.imageLink,
        colors: req.body.colors,
        description: req.body.description,
        memoryStorage: req.body.memoryStorage,
        sold: req.body.sold
  }
)

   
    try{
        await cellphone.save()
        res.status(200).send({message:'cellphone successfully created'})
    }catch(err){
        res.status(500).send({
            message:
                err.message || "Some error occured while creating the cellphone"
        })
        console.log(err)
    }
}

exports.findAll = async (req,res) =>{
    
    const name = req.query.name
    let condition = name ? { name: {$regex: new RegExp(name),$options:"i"}} : {}

    await  Cellphone.find(condition).exec(
        (err,cellphones)=>{
            if(err){
                res.status(500).json({message: err.message || "Some error occured while find the all cellphone"})
                return
            }
            res.status(200).json(cellphones)
          
        }
    )

 
}

exports.findOne = (req,res) =>{
    const id = req.params.id

    Cellphone.findById(id).exec(
        (err,cellphone)=>{
            if(err){
                res.status(500).json({message:err.message || `Error retrieving cell phone with id=${id}`})
                return
            }
            res.status(200).json(cellphone)
        }
    )
}

exports.updata = (req,res)=>{
    if(!req.body){
        return res.status(400).json({
            message:  "Data to update can not be empty!"
        })
    }

    const id = req.params.id

    Cellphone.findByIdAndUpdate(id,req.body,{useFindAndModify:false})
        .then(data=>{
            if(!data){
                res.status(404).json({
                    message: `Cannot update Cell phone with id=${id}. Maybe Cell phone was not found`
                })
            }else res.json({message:"Cell phone was updated successfully"})
        }).catch(err =>{
            res.status(500).json({
                message:`Error updating Cell phone with id=${id}`
            })
        })
}

exports.delete = async(req,res)=>{
    const id = req.params.id

    Cellphone.findByIdAndRemove(id)
        .then(data =>{
            if(!data){
                res.status(400).json({
                    message:`Cannot delete Cell phone with id=${id}. Maybe Cell phone was not found`
                })
            }else res.json({
                message: "Cell phone was deleted successfully!"
            })
        })
        .catch(err =>{
            res.status(500).send({
                message: `Could not delete Cell phone with id=${id}`
            })
        })
}

exports.deleteAll = async(req,res)=>{
    Cellphone.deleteMany({})
    .then(data =>{
        res.json({
            message: `${data.deletedCount} Cell phone were deleted successfully!`
        })
    })
    .catch(err =>{
        res.status(500).json({
            message:
                err.massage || "Some error occurred while removing all cell phones"
        })
    })
}

exports.findAllSold = async(req,res)=>{
    Cellphone.find({sold:true})
        .then(data=>
            res.send(data)
        )
        .catch(err=>{
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving cell phones"
            })
        })
}