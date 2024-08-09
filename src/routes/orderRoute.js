const express = require('express');
const {createOrder} = require('../controllers/orderControllers')
const { isLoggedIn } = require('../validation/authValidator');

const orderRouter = express.Router();

orderRouter.post('/', isLoggedIn , createOrder)



module.exports = orderRouter;