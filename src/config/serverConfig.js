
const dotenv = require('dotenv')

dotenv.config()


module.exports = {
    PORT : process.env.PORT,
    DB_URL:process.env.DB_URL,
    SECRET_KEY:process.env.SECRET_KEY,
    cloudnary_cloud_name:process.env.cloudnary_cloud_name,
    cloudnary_api_key:process.env.cloudnary_api_key,
    cloudnary_secret_key:process.env.cloudnary_secret_key
}



