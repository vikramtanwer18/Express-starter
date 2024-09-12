
const cloudinary = require('../config/cloudnaryConfig')
const fs = require('fs/promises');
const {createProduct,getProductById,deleteProductById, getAllProducts} = require('../repositories/productRepo')

const productRegister = async(productDetails)=>{
   // first we check the image in available or not
    const imagePath = productDetails.imagePath;
    // if image  avilable then product not create
    if(imagePath){
        try{
            const result = await cloudinary.uploader.upload(imagePath)
            var image_url = result.secure_url;
           // this is method for remove the upload images on the server
             fs.unlink(process.cwd()+"/"+ imagePath) 
           }catch(err){
            console.log("err while uplodaing the file on cloudinary",err)
           }
    }
   

    // then create a product

      const product = await createProduct({...productDetails,productImage:image_url})
        
        if(!product){
          
           throw{reason:"Something went wrong product can not create ",statusCode:500}
       }
      
       return product;  
}



async function handleGetProduct(productId){

       const product = await getProductById({_id:productId})
       if(!product){
        throw{reason:"Something went wrong product can not found ",statusCode:500}
       }

       return product;
}


async function handleGetAllProducts(){

  const product = await getAllProducts()
  if(!product){
   throw{reason:"Something went wrong product can not found ",statusCode:500}
  }

  return product;
}

async function handleDeleteProduct(productId){

  const product = await deleteProductById({_id:productId})
  console.log("deleted product",product)
  if(!product){
   throw{reason:"Something went wrong product can not found ",statusCode:404}
  }

  return product;
}

module.exports = {
    productRegister,
    handleGetProduct,
    handleDeleteProduct,
    handleGetAllProducts
}