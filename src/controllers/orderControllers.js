const { handleCreateOrder, handleAllGetOrdersByUserId, handleGetOrderByOrderId, handleUpdateStatus } = require("../services/orderService");

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


async function getAllOrders(req,res){
  const userId = req.user.id;

try {
  const response = await handleAllGetOrdersByUserId(userId)
  return res.status(201).json({
      message:'successfully fetch  the all orders',
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

async function getOrder(req,res){
  const orderId = req.params.orderId;
try {
  const response = await handleGetOrderByOrderId(orderId)
  return res.status(201).json({
      message:'successfully fetch the order',
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


async function updateStatus(req,res){
  const orderId = req.params.orderId;
try {
  const response = await handleUpdateStatus( orderId  ,"CANCLED")
  return res.status(201).json({
      message:'successfully update status of the  order',
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



async function changeStatus(req,res){
  const orderId = req.params.orderId;
  const status = req.body.status;
console.log("status",status)
try {
  const response = await handleUpdateStatus( orderId ,status)
  return res.status(201).json({
      message:'successfully update status of the  order',
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
    createOrder,
    getAllOrders,
    getOrder,
    updateStatus,
    changeStatus
}

