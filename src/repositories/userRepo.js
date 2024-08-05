const user = require('../schemas/index');


async function findUser(peramerters){
    const response = await user.findOne({...peramerters})

    return response;
}          

async function createUser(details){
    const response = await user.create({...details})
     return response 
  }   



module.exports = {
    findUser,
    createUser,
};