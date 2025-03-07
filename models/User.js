const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose')
const userSchema = mongoose.Schema({
    email:{
        type:String,
        trim: true,
        required:true
    },
    role:{
        type: String,
        required: true
    },
    cart: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product'
        }
    ],
    wishList:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product"
        }
    ]
})

userSchema.plugin(passportLocalMongoose);

const User = mongoose.model('User', userSchema);

module.exports = User;