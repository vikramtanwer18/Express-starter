const product = require('../schemas/productSchema');

async function createProduct(productDetails){

    try {
        const result = await product.create({...productDetails})
        return result
    } catch (error) {
        console.log("product not created",error)
    }

}

module.exports = {
    createProduct
}

