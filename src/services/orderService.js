const {createOrder} = require('../repositories/orderRepo');

const {getCartById,clearCartById} = require('../repositories/cartRepo')

const {findUser} = require('../repositories/userRepo')



async function handleCreateOrder(userId,paymentMethod){
  
    const cart = await getCartById(userId)
   
    const user = await findUser({_id:userId})
    if(!cart){
        console.log("error while fetching the cart")
        throw{reason:"something went wrong  the cart can not find",statusCode:500};
    }

    if(cart.items.length === 0) {
        console.log("cart items is empty")
        throw{reason:"Cart is empty, please add some items to the cart",statusCode:500};
    }

    if(!user){
        console.log("error while fetching the user")
        throw{reason:"something went wrong  the user can not find",statusCode:500};
    }
    const orderObject = {};

    orderObject.user = cart.user;

    orderObject.items = cart.items.map((cartItem)=>{
        return  {product:cartItem.product , quantity:cartItem.quantity} 
    })

    orderObject.status = 'ORDERED',
    orderObject.totalPrice = 0;
    cart.items.forEach((cartItem)=>{
        orderObject.totalPrice  += cartItem.product.price * cartItem.quantity
    });
   
    orderObject.address = user.address;

    orderObject.paymentMethod = paymentMethod
    
   const order = await createOrder(orderObject);

   if(!order){
    throw{reason:'something went wrong order can not creating',statusCode:500};
   }

   await clearCartById({user:userId})

   return order;
   
}



module.exports = {
    handleCreateOrder
}