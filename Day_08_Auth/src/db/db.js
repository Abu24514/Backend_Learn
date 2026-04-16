// Import mongoose for MongoDB connection
const mongoose = require("mongoose");

// Function to connect database
function connectDB(){

    // Connect to MongoDB using URL from .env file
    mongoose.connect(process.env.MONGODB_URL)
    .then(()=>{
        // If connection successful
        console.log("Connect to DataBase");
    })
    .catch((err)=>{
        // If connection fails
        console.error("DataBase connection failed :", err);
    })
}

// Export database connection function
module.exports = connectDB;