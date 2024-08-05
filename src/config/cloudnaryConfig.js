const { cloudnary_cloud_name, cloudnary_api_key, cloudnary_secret_key } = require('./serverConfig')

const cloudinary = require('cloudinary').v2

cloudinary.config({
    cloud_name: cloudnary_cloud_name, 
    api_key: cloudnary_api_key, 
    api_secret:cloudnary_secret_key
})

module.exports = cloudinary