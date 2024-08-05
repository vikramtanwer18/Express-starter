
const {userRegister} = require("../services/userService")

async function createUser(req,res){

    try {
        const response = await userRegister(req.body)
        return res.status(200).json({
            message:'successfully registered the user',
            success:true,
            data:response,
            error:{}
        })
    } catch (error) {
        return res.status(400).json({
            message:error.reason,
            success:false,
            data:{},
            error:error
        })
    }
}



module.exports ={
    createUser
}