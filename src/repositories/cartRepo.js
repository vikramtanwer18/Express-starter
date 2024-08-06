
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
        const result = await cart.findOne(userId);   
        return result;
    } catch (error) {
        console.log("error while fetching the cart",error)
    }
}

module.exports ={
    createCart,
    getCartById
}