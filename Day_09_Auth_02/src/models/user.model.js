// Import mongoose (used for MongoDB connection and schema)
const mongoose = require("mongoose");

// Create user schema (structure of user data in database)
const userSchema = new mongoose.Schema({
   username: String, // Store username
   password: String  // Store password
});

// Create user model from schema
const userModel = mongoose.model("user", userSchema);

// Export user model
module.exports = userModel;