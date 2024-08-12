const { getCartById, clearCartById } = require("../repositories/cartRepo");
const { handleGetProduct } = require("./productService");


async function handleGetCart(userId){
    
        const cart = await getCartById(userId) 
        if(!cart){
            throw{reason:"Something went wrong cart can not found ",statusCode:500}
        }

        return cart;
}



async function handleModifyToCart(userId,productId ,shouldAdd){
    console.log('shoudadd',shouldAdd)
    const quantityValue = shouldAdd ? 1 : -1;
    const cart = await handleGetCart(userId);
    const product = await handleGetProduct(productId)
    console.log('product id',productId)
    console.log('there is product',product)
    if(!product){
        throw{reason:"Something went wrong product can not found ",statusCode:500}
    }

    if((!product.inStock) || (product.quantity <= 0)){
     throw{reason:"Something went wrong product is out of stock",statusCode:500}
    }

   if(cart.items.length > 0){
    console.log('there is cart',cart)
    console.log('there is cart',cart.items.length)
    cart.items.forEach((item)=>{
        if(item.product._id == productId){
          if(shouldAdd){
                if(item.quantity  <= product.quantity){
                    item.quantity +=quantityValue;
                   
                }else{
                    throw{reason:"Something went wrong product is out of stock",statusCode:500}
                }
        }else{
            if(item.quantity > 0){
                item.quantity += quantityValue;
            }else{
                if( item.quantity == 0){
                    cart.items = cart.items.filter((item)=>item.product._id != productId)
                       console.log('cart items',cart.items)
                       return ;
                   }

            }   
           }   
        }
      
    })
   } else{
    if(quantityValue){
        console.log('there is cart an else',cart)
    cart.items.push({
     product:productId,
     quantity :1
        })
    }
  
   }

   cart.save();
 
//   product.quantity -=1;

//   product.save();
console.log('cart is',cart)
  return cart
    
}



async function handleClearCart(userId){

    const cart  = await clearCartById({user:userId})

    if(!cart){
        throw{reason:'something went wrong cart can not deleted',statusCode:500}
    }
    return cart;
}





module.exports = {
    handleGetCart,
    handleModifyToCart,
    handleClearCart
}



