const express = require("express");
const { uploder } = require("../middlewares/multerMiddleware");
const {  createProduct ,   getProduct, getAllProducts, deleteProduct} = require("../controllers/productController");
const { isLoggedIn, isAdmin } = require("../validation/authValidator");



const productRouter = express.Router();

productRouter.post('/product',isLoggedIn,isAdmin,
    uploder.single('imgFile'), createProduct)

productRouter.get('/:id',getProduct)

productRouter.get('/',getAllProducts)

productRouter.delete('/:id',deleteProduct)

module.exports = productRouter;