const mongoose = require('mongoose');

const {Schema} = mongoose;

const userSchma = new Schema({
    firstName:{
        type:String,
        required:true

    },
    lastName:{
        type:String,
        required:true

    },
    email:{
        type:String,
        required:true
    },
    telephone:{
        type:String,
    },
    addressOne:{
        type:String,
    },
    addressTwo:{
        type:String,

    },
    city:{
        type:String,

    },
    postCode:{
        type:String,
    },
    country:{
        type:String,
    },
    state:{
        type:String,
    },
    password:{
        type:String,
        required:true
    },
    verifed:{
        type:Boolean,
        default:false
    }
})

module.exports = mongoose.model("User",userSchma)