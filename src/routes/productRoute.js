const express = require("express");
const { uploder } = require("../middlewares/multerMiddleware");
const {  createProduct ,   getProduct, deleteProduct} = require("../controllers/productController");


const productRouter = express.Router();

productRouter.post('/product',uploder.single('imgFile'), createProduct)

productRouter.get('/:id',getProduct)

productRouter.delete('/:id',deleteProduct)

module.exports = productRouter;