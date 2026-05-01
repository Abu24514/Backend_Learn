const mongoose = require("mongoose");

async function connectToDB() {
   try {
     await mongoose.connect(process.env.MONGODB_URL);
    console.log("DataBase connected to Successfully!");
   } catch (error) {
    console.error("DataBase connection failed : " , error);
    
   }

    
}

module.exports = connectToDB;