const mongoose = require("mongoose");

function connectToDB(){
    mongoose.connect(process.env.MONGODB_URL)
    .then(()=>{
        console.log("connect to DataBase");
        
    })
}

module.exports = connectToDB;