const express = require('express');
const Router = express.Router();
const groceryModel = require('./model');

Router.post('/add',(req,res)=>{
    const data = req.body;
    const groceryItem = new groceryModel({
        'groceryItem':data.groceryItem,
        'isPurchased':false
    })
    groceryItem.save()
    .then((result)=>res.send({"msg":"item added"}))
    .catch((error)=>res.send({"msg":"item not added"}))
})
module.exports = Router