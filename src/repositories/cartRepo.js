
const cart = require('../schemas/cartSchema')

async function createCart(userId){
    try {
        const result = await cart.create(userId);
        return result;
    } catch (error) {
        console.log("error while creating the cart",error)
    }
}

module.exports ={
    createCart
}