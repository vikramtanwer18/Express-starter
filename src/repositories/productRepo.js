const product = require('../schemas/productSchema');

async function createProduct(productDetails){

    try {
        const result = await product.create({...productDetails})
        return result
    } catch (error) {
        console.log("product not created",error)
    }

}

async function getProductById(productId){

    try {
        const result = await product.findById(productId)
        return result;
    } catch (error) {
        console.log("product not found ",error) 
    }

}



async function deleteProductById(productId){

    try {
        const result = await product.findByIdAndDelete(productId)
        return result;
    } catch (error) {
        console.log("product not found ",error) 
    }

}

module.exports = {
    createProduct,
    getProductById,
    deleteProductById
}

