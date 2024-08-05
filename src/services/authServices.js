const { findUser } = require("../repositories/userRepo");
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
const { SECRET_KEY } = require("../config/serverConfig");

async function userLoginHandle(authDetails){
    // console.log('this is authservice',authDetails)
    // we check if the user exist or not with the given crendentials
     const user = await findUser({email:authDetails.email})
   
    // if user not exist 
    if(!user){
        throw{message:'User already exist with this email id',statusCode:404}
    }
    // or user exist then compare the password
     const isPassword = await bcrypt.compare(authDetails.password,user.password);
    //  console.log('this is password',isPassword)
     if(!isPassword){
        throw{message:'User password do not match please try again',statusCode:404}
     }
    // if password match then create the token
    const userRole = user.role?user.role:"USER"
    console.log("user role",userRole)
    const token = jwt.sign({email:user.email,id:user._id,role:userRole},SECRET_KEY,{expiresIn:"1h"})
    // token pass to the client
    return token;
}

module.exports ={
    userLoginHandle
}