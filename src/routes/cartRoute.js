const express = require('express');
const { getCart, modifyToCart, clearCart} = require('../controllers/cartControllers');
const { isLoggedIn } = require('../validation/authValidator');

const cartRouter = express.Router();


cartRouter.get('/', isLoggedIn ,getCart)

cartRouter.post('/:operation/:productId', isLoggedIn ,modifyToCart)

cartRouter.delete('/product',isLoggedIn,clearCart)

module.exports = cartRouter;