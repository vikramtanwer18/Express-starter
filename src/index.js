const express = require("express");
//  importing the serverconfig file for port no
const serverConfig = require("./config/serverConfig")
//  importing the database file for mongoDB connection 
const connectDB = require("../src/config/dbConfig")

const app = express()
// use for the parsing the data/ req body 
app.use(express.json())
app.use(express.text())
app.use(express.urlencoded({extended:true}))


app.listen(serverConfig.PORT,async()=>{
   await connectDB()
    console.log(`server started at port ${serverConfig.PORT}`)
});

// vikramkumarsaini007

// Vl112YJp0OgammBM


//'mongodb+srv://vikramkumarsaini007:Vl112YJp0OgammBM@cluster0.nb5cdgf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

