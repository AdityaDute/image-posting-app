const mongoose = require('mongoose')
require('dotenv').config();


async function connectDb(){
    await mongoose.connect(process.env['MONGODB_URI'])
    console.log("Database is Connected");
}

module.exports = connectDb