// Load environment variables from .env file
require("dotenv").config();

// Import express app
const app = require("./src/app");

// Import database connection function
const connectDB = require("./src/db/db");

// Connect to database
connectDB();

// Start server on port 3000
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});