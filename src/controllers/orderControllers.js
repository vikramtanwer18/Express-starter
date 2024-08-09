const { handleCreateOrder } = require("../services/orderService");

async function createOrder(req,res){
    const userId = req.user.id;
    const paymentMethod = req.body.paymentMethod;
  try {
    const response = await handleCreateOrder(userId ,paymentMethod)
    return res.status(201).json({
        message:'successfully create the order',
        success:true,
        data:response,
        error:{}
    })
  } catch (error) {
    console.log(error)
    return res.status(500).json({
        message:error.reason,
        success:false,
        data:{},
        error:error
    })
  }
}


module.exports = {
    createOrder
}