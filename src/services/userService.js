const {findUser,createUser} = require('../repositories/userRepo');
const {createCart} = require('../repositories/cartRepo')
    async function userRegister(userDetails){
        // it will create brand new user
        // we check the user with email and mobilenumber exist or not

        const user = await findUser(
           {
            email:userDetails.email,
            mobileNumber:userDetails.mobileNumber
           });
          //if user found
           if(user){
            throw{reason:'user with this email or mobileNumber alrady exist',stausCode:400}
           }
    
 //if user not found then create use
        const newUser = await createUser({
            email:userDetails.email,
            mobileNumber:userDetails.mobileNumber,
            firstName:userDetails.firstName,
            lastName:userDetails.lastName,
            password:userDetails.password
           })
      
         // if newuser not create
           if(!newUser){
            throw{reason:"Somethins went wrong user cannot create",stausCode:500}
              }
            // if user created return newuser

            await createCart({user:newUser._id})

              return newUser


    }
    

module.exports ={
  userRegister
};

