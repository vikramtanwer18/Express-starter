const express = require('express');
const {loginUser, logoutUser } = require('../controllers/authControllers');

const authRouter = express.Router();

authRouter.post('/',loginUser)

authRouter.post('/logout',logoutUser)

module.exports = authRouter;