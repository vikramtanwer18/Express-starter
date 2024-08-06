const jwt = require("jsonwebtoken");
const { SECRET_KEY } = require("../config/serverConfig");
async function isLoggedIn(req,res,next){
    //  console.log('req when login the user',req)
    // first we access the token with the help of req.cookies
    const token = req.cookies['authToken'];
    // console.log("req cookies",token)
    // if token not found then send the res with unauthorized
    if(!token){
        res.status(401).json({
            success:false,
            error:"unauthorized token",
            data:{},
            message:"user token not found"
        })
    }
    //if token found then we verify the token with jwt verify method
    try {
        const decode = jwt.verify(token,SECRET_KEY);
        // console.log(decode)
        if(!decode) {
            console.log("can not decode");
        }
        req.user = {
            email:decode.email,
            id:decode.id,
            role:decode.role
         } 
        
         next()
           // if token not matched the user is unauthorized
    } catch (error) {
        res.status(401).json({
            success:false,
            error:"unauthorized token",
            data:{},
            message:"Invalid token found"
        })
    }
     
    // if token match 
    

  

}

function isAdmin(req,res,next){
  const loggedInUserRole = req.user.role;
  console.log('login user role',loggedInUserRole)
  if(loggedInUserRole==="ADMIN"){
    next()
  }else{
    res.status(401).json({
        message:'Unauthorized user',
        success:false,
        data:{},
        error:{
            reason:"User is not Admin",
            statusCode:401
        }
    })
  }
}

module.exports ={

    isLoggedIn,
    isAdmin
}