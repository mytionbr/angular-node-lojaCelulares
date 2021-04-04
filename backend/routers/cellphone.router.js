const express = require('express')
const cellphones = require('../controllers/cellphone.controller')
const router = express.Router()

router.get("/",cellphones.findAll)

router.get("/sold",cellphones.findAllSold)

router.get("/:id",cellphones.findOne)

router.post("/",cellphones.create)

router.put("/:id",cellphones.updata)

router.delete("/:id",cellphones.delete)

router.delete("/",cellphones.deleteAll)


module.exports = router