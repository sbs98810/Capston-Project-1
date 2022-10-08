const express = require('express')
const groceryModel = require('./model')
const Router = express.Router()

Router.get('/getAll',async(req,res)=>{
try{
    const result=await groceryModel.find({})
    res.send(result)
}
catch(e){
    res.send('error')
}
})

module.exports = Router