const { handleGetCart } = require("../services/cartService")

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


module.exports = {
    getCart
}