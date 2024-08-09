
const cart = require('../schemas/cartSchema')

async function createCart(userId){
    try {
        const result = await cart.create(userId);
        return result;
    } catch (error) {
        console.log("error while creating the cart",error)
    }
}


async function getCartById(userId){  
    try {
        const result = await cart.findOne({user:userId}).populate('items.product');
       
        return result;
    } catch (error) {
        console.log("error while fetching the cart",error)
    }
}


async function clearCartById(userId){
    try{     
    const result = await cart.findOne({...userId})
    console.log(result)
    if(!result){
     console.log("error while clear the cart",error)
    }
    result.items = [];
    result.save()
    return result;
} catch (error) {
    console.log("error while clear the cart",error)
}
  
}

module.exports ={
    createCart,
    getCartById,
    clearCartById
}