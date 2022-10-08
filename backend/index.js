const express = require('express')
const server = express()

const bp = require("body-parser")
server.use(bp.json())

let cors = require("cors");
server.use(cors());

const addItem = require('./GroceryBackend/addGrocery');
server.use('/grocery',addItem)

const findAll = require('./GroceryBackend/findAll');
server.use('/grocery',findAll)

const updateStatus = require('./GroceryBackend/updateStatus');
server.use('/grocery',updateStatus)

const deleteItem = require('./GroceryBackend/deleteItem');
server.use('/grocery',deleteItem)

const port = process.env.port||3001;
server.listen(port, () => console.log('server started'))