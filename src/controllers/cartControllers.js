const { handleGetCart,  handleModifyToCart, handleClearCart} = require("../services/cartService")

async function getCart(req,res){
     try {
        const userId = req.user.id;
        console.log('userid',userId)
        const response = await handleGetCart(userId) 
        return res.status(201).json({
            message:'successfully get the cart',
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


async function modifyToCart(req,res){
    try {
       const userId = req.user.id;
       console.log('userid',userId)
       const response = await handleModifyToCart(userId,req.params.productId,req.params.operation == 'add')
       return res.status(201).json({
           message:'successfully add to  cart',
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


async function clearCart(req,res){
    try {
        const userId = req.user.id;
       const response = await handleClearCart(userId) 
       return res.status(201).json({
           message:'successfully clear the cart',
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
    getCart,
    modifyToCart,
    clearCart
}