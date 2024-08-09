
const order = require('../schemas/orderSchema');

async function createOrder(orderDetails){
   try {
    const result = order.create({...orderDetails});
    return result;
   } catch (error) {
    console.log("error while creating the order",error)
   }
    
}

module.exports = {
    createOrder
}