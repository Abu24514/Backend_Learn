// Import express framework
const express = require("express");

// Import auth routes
const authRoutes = require("./routes/auth.routes");

// Import cookie-parser middleware (used to read cookies)
const cookieParser = require("cookie-parser");

// Create server/app
const app = express();

// Middleware to parse JSON data from request body
app.use(express.json());

// Middleware to read cookies from request
app.use(cookieParser());

// Use auth routes with base path "/auth"
// Example: /auth/register , /auth/login , /auth/user
app.use("/auth", authRoutes);

// Export app
module.exports = app;