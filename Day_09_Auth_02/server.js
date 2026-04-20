// Load environment variables from .env file
require("dotenv").config();

// Import express app
const app = require("./src/app");

// Import database connection function
const connectDB = require("./src/db/db");

// Connect to database
connectDB();

// Start server on port 4000
app.listen(4000, () => {
    console.log("server is running port on 4000");
});