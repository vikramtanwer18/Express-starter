const express = require("express");
const cors = require('cors')
//  importing the serverconfig file for port no
const serverConfig = require("./config/serverConfig")
//  importing the database file for mongoDB connection 
const connectDB = require("../src/config/dbConfig");
const user = require("./schemas/index");
const userRouter = require("./routes/userRoute");
const cartRouter = require("./routes/cartRoute");
const authRouter = require("./routes/authRoute");
const cookieParser = require("cookie-parser");
const { isLoggedIn } = require("./validation/authValidator");
const { uploder } = require("./middlewares/multerMiddleware");
const cloudinary = require('./config/cloudnaryConfig')
const fs = require('fs/promises');
const path = require("path");
const productRouter = require("./routes/productRoute");
const orderRouter = require("./routes/orderRoute");

// console.log("this is cloudinary",cloudinary)
const app = express()
// use for the parsing the data/ req body 
app.use(express.json())
app.use(express.text())
app.use(express.urlencoded({extended:true}))
// cookieparser are used for to bring the token from header automatically
app.use(cookieParser())

app.use(cors({
    credentials:true,
    origin:'https://unlimited-pizza.netlify.app'
}))
// this is used for cheking the cookie req
app.get('/ping',(req,res)=>{
    console.log("req user",req.user)
    res.send({message:"Happppyyyy"})
})

//this is used for upload the photo
app.post('/photo',uploder.single('firstFile'),async(req,res)=>{
         console.log(req.file)
        console.log("req body",req.body)
        // this file path upload on the cloudniary 
       try{
        const result = await cloudinary.uploader.upload(req.file.path)
        console.log(result)
       // this is method for remove the upload images on the server
         fs.unlink(req.file.path)
        res.json({message:'ok'})

       }catch(err){
        console.log("err while uplodaing the file on cloudinary",err)
       }
})

// 
// we will define the global routes middleware
app.use('/user',userRouter)
app.use('/login',authRouter)
app.use('/auth',authRouter)
app.use('/cart',cartRouter)
app.use('/register',productRouter)
// get the product
app.use('/product',productRouter)
app.use('/products',productRouter)
// create the order
app.use('/orders',orderRouter)

app.listen(serverConfig.PORT,async()=>{
   await connectDB()
//   try{
//    const newUser = await user.create({
//     firstName:'vikram',
//     lastName:"saini",
//     email:"vikram@gmil.com",
//     mobileNumber:"1234567890"
//    })
//    console.log(newUser)
// }catch(err){
//     console.log('error while creating user',err)
// }
    console.log(`server started at port ${serverConfig.PORT}`)
});

// vikramkumarsaini007

// Vl112YJp0OgammBM


//'mongodb+srv://vikramkumarsaini007:Vl112YJp0OgammBM@cluster0.nb5cdgf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'



//cloudinary  server image url
//https://res.cloudinary.com/dkwq3jvsr/image/upload/v1722768621/wnjfaspkfvy0hpflirjf.jpg

// cloudnary
//https://res.cloudinary.com/dkwq3jvsr/image/upload/v1722768621/wkwqnjfaspkfvy0hpflirjf.jpg