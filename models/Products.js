const { types } = require('joi');
const mongoose = require('mongoose')
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    img:{
        type: String,
        trim: true,
    },
    price:{
        type: Number,
        min: 0,
        required: true
    },
    desc:{
        type: String, 
        trim: true
    },
    reviews:[   
        {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Review'
        }
    ],
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    avgRating: {
        type: Number,
        default: 0
    },
    is_deleted: {
        type: Boolean,
        default: false,
    }

})
const Product = mongoose.model('Product', productSchema)
module.exports = Product;