const express = require("express");
const { uploder } = require("../middlewares/multerMiddleware");
const {  createProduct } = require("../controllers/productController");


const productRouter = express.Router();

productRouter.post('/product',uploder.single('imgFile'), createProduct)


module.exports = productRouter;