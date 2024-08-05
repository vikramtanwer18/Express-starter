
const { productRegister ,handleGetProduct, handleDeleteProduct} = require('../services/productService');
async function createProduct(req,res){
    try {
        const response = await productRegister({
            productName:req.body.productName,
            price:req.body.price,
            description:req.body.description,
            category:req.body.category,
            inStock:req.body.inStock,
            imagePath:req.file?.path // when image is not upload then it will return undefined and without image it will work
        });
       
       return res.status(201).json({
            message:'successfully create the product',
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


async function getProduct(req,res){

    try {
        const id = req.params.id;
        console.log(id)
        const response = await handleGetProduct(id)
        res.status(200).json({
            message:'product are found',
            success:true,
            error:{},
            data:response,
    
        })
    } catch (error) {
        res.status(500).json({
            message:'product are not found',
            success:false,
            error:error,
            data:{}
    
        })
    }

}


async function deleteProduct(req,res){

    try {
        const id = req.params.id;
        console.log(id)
        const response = await handleDeleteProduct(id)
        res.status(200).json({
            message:'product are delted',
            success:true,
            error:{},
            data:response,
    
        })
    } catch (error) {
        res.status(error.statusCode).json({
            message:'product are not found',
            success:false,
            error:error,
            data:{}
    
        })
    }

}


module.exports = {
    createProduct,
    getProduct,
    deleteProduct
}