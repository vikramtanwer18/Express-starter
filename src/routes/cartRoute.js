const express = require('express');
const { getCart } = require('../controllers/cartControllers');
const { isLoggedIn } = require('../validation/authValidator');

const cartRouter = express.Router();


cartRouter.get('/', isLoggedIn ,getCart)


module.exports = cartRouter;