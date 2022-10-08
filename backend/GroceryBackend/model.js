const mongoose = require('mongoose');
const { boolean } = require('webidl-conversions');

mongoose.connect('mongodb://localhost:27017/DemoDB')
.then((res)=>console.log('db connecteed'))
.catch((err)=>console.log('db error'));

const groceryModel = mongoose.model('grocery',{
    groceryItem:String,
    isPurchased:Boolean
})

module.exports = groceryModel