const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true,
    },
    price:{
        type:Number,
         required: true,
    },
    description:{
        type:String,
    },
    category:{
        type:String,
    },
    image:{
        type:String,
    }
},{timestamps:true})

module.exports = mongoose.model('product',productSchema)