const { getCartById } = require("../repositories/cartRepo");


async function handleGetCart(userId){

        const cart = await getCartById({user:userId})

        
        if(!cart){
            throw{reason:"Something went wrong cart can not found ",statusCode:500}
        }

        return cart;

   

}

module.exports = {
    handleGetCart
}



