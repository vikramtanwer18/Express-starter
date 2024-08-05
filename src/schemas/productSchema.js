const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    productName:{
        type:String,
        required:[true,"Product name is required"],
        trim:true,
        minlength:[5,"product name is atleast 5 character long"]
    },
    price:{
        type:Number,
        required:[true,"Price is require"],

    },
    description:{
        type:String,
        required:[true,"description is required"],
        trim:true,
        minlength:[5,"product name is atleast 5 character long"]
    },
    productImage:{
        type:String,
    },
    category:{
        type:String,
        enum:['veg','non-veg','drinks','snacks'],
        default:'veg',
    },
    inStock:{
        type:Boolean,
        required:[true,'in stock must be provided'],
        default:true
    }
},{timestamps:true});


const product = mongoose.model("Product",productSchema);

module.exports = product;



