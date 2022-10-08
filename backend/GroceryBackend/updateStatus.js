const express = require('express');
const groceryModel = require('./model');
const Router = express.Router();
Router.get('/updateStatus/:taskid',async (req,res)=>{
    try{
        const tid=req.params.taskid
        const data = await groceryModel.findOne({_id:tid});
        await groceryModel.findOneAndUpdate({ _id : tid },{isPurchased:!data.isPurchased})
        res.send({"result":"sucess"})
    }
    catch(e){
        res.send({"result":"error"})
    }
})
module.exports=Router