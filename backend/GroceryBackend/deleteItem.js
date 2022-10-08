const express = require('express')
const Router = express.Router()
const groceryModel = require('./model')

Router.delete('/deleteItem/:taskid', async (req, res) => {
    const tid = req.params.taskid
    try {
        const result = await groceryModel.deleteOne({ _id : tid })
        if (result.deletedCount > 0) {
            res.send({"result":"deleted"})
        }
        else {
            res.send({"result":"not deleted"})
        }
    }
    catch (e) {
        res.send({"msg":"some error occured"})
    }
})
module.exports = Router