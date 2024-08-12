
const order = require('../schemas/orderSchema');

async function createOrder(orderDetails){
   try {
    const result = order.create({...orderDetails});
    return result;
   } catch (error) {
    console.log("error while creating the order",error)
   }
    
}


async function getAllOrdersByUserId(userId){
    try{
    const result = order.find({...userId}).populate('items.product')
    return result;
    }catch(error){
        console.log('error while fetching the orders ',error)
    }
}

async function getOrderByOderId(orderId){
    console.log({...orderId})
    try{
    const result = order.findById({...orderId}).populate('items.product')
    console.log("order get one",result)
    return result;
    }catch(error){
        console.log('error while fetching the order',error)
    }
}


async function updateOrderStatusByOrderId(orderId,status){
    console.log("oreder id and status",orderId,status)
    try{
    const result = order.findByIdAndUpdate(orderId,{status:status},{new:true})
    console.log('updted status',result)
    return result;
    }catch(error){
        console.log('error while update the status of the order',error)
    }
}

module.exports = {
    createOrder,
    updateOrderStatusByOrderId,
    getOrderByOderId,
    getAllOrdersByUserId

}