const express = require('express');
const {createOrder, getAllOrders, getOrder, updateStatus, changeStatus} = require('../controllers/orderControllers')
const { isLoggedIn, isAdmin } = require('../validation/authValidator');

const orderRouter = express.Router();

orderRouter.post('/', isLoggedIn , createOrder)

orderRouter.get('/', isLoggedIn , getAllOrders)

orderRouter.get('/:orderId', isLoggedIn , getOrder)

orderRouter.put('/:orderId/cancle', isLoggedIn , updateStatus)

orderRouter.put('/:orderId/status', isLoggedIn,isAdmin, changeStatus)

module.exports = orderRouter;