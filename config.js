const dotenv = require('dotenv')
dotenv.config()
module.exports ={
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,   
    refreshToken: process.env.REFRESH_TOKEN,
    accessToken: process.env.ACCESS_TOKEN 
}