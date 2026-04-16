// Import express framework
const express = require("express");

// Import auth routes
const authRoutes = require("./routes/auth.routes");

// Create express server/app
const app = express();

// Middleware to parse JSON data from request body
app.use(express.json());

// Use auth routes with base path "/auth"
// Example: /auth/register , /auth/login
app.use("/auth", authRoutes);

// Export app to use in server.js
module.exports = app;