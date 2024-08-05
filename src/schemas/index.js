const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const userSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:[true ,"user firstName should be provided"],
        maxlength:[10,'max length of character should be eqal to or less than 10'],
        lowercase:true,
        trim:true
    },
    lastName:{
        type:String,
        required:[true,"user firstName should be provided"],
        maxlength:[10,'max length of character should be eqal to or less than 10'],
        lowercase: true,
        trim:true
    },
    email:{
        type:String,
        trim:true,
        lowercase:true,
        required:[true,'email must be required'],
        unique:[true,'user already exist'],
        match:[/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    mobileNumber:{
        type:String,
        required:[true,'mobile number should be provided'],
        unique:[true,'user already exist'],
        minlength:10,
        maxlength:10
    },
    password:{
        type:String,
        required:true,
        trim:true,
        maxlength:[10,'max length of password should be eqal to or less than 10'],
    }
},{timestamps:true});




userSchema.pre('save', async function() {
  const hasedPassword = await bcrypt.hash(this.password,10)
  this.password = hasedPassword
  });

const user = mongoose.model("User",userSchema);

module.exports = user;