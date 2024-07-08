const mongoose = require("mongoose")

const serverConfig = require("./serverConfig")

async function connectDB(){
    try {
        await mongoose.connect(serverConfig.DB_URL)
        console.log("successfully connected mongodb server")
    } catch (error) {
        console.log("Error while connecting the database",error)
    }
}

module.exports = connectDB

