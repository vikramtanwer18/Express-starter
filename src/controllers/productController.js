
const { productRegister } = require('../services/productService');
async function createProduct(req,res){
    try {
        const response = await productRegister({
            productName:req.body.productName,
            price:req.body.price,
            description:req.body.description,
            category:req.body.category,
            inStock:req.body.inStock,
            imagePath:req.file.path
        });
       
       return res.status(200).json({
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

module.exports = {
    createProduct
}