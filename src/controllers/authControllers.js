
const {userLoginHandle} =require('../services/authServices')

async function loginUser (req,res){

try {
    const loginPayload = req.body;
    const response = await userLoginHandle(loginPayload);
    res.cookie("authToken",response,{
    secure:false,
    httpOnly:true,
    maxAge:7*24*60*60*1000
   })
    return res.status(200).json({
        message:'successfully login the user',
        success:true,
        data:{},
        error:{}
    })
} catch (error) {
    return res.status(error.statusCode).json({
        message:error.reason,
        success:false,
        data:{},
        error:error
    })
}
}
module.exports={
    loginUser
};