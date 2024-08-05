const express = require('express');
const {loginUser } = require('../controllers/authControllers');

const authRouter = express.Router();

authRouter.post('/',loginUser)



module.exports = authRouter;