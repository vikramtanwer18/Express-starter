const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'user'
    },
    items:[
        {
            product:{
                type:mongoose.Schema.Types.ObjectId,
                ref:'product',
                required:true
            },
            quantity:{
                type:Number,
                required:true,
                default:1
            }
        }
    ],

    address:{
        type:String,
        minlength:[10,'address should be equal  or greater than 10 ']  
    },
    status:{
        type:String,
        default:"ORDERED",
        enum:['ORDERED','PROCESSING','DELIVERED','OUT-OF-DELIVERED']
    },
    totalPrice:{
        type:Number,
    },

    paymentMethod:{
        type:String,
        default:"CASH",
        enum:['ONLINE','CASH']
    }



},{timestamps:true})


const order = mongoose.model("Oreder",orderSchema);

module.exports = order;