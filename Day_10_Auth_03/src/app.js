const express = require("express");
const authRoutes = require("./routes/auth.routes");
const cookieParser = require("cookie-parser");
const app = express();

// middleware
app.use(express.json());
app.use(cookieParser());

// use routes
app.use("/api/auth" ,authRoutes);
module.exports = app;