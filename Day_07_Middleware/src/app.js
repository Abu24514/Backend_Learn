const express = require("express");
const indexRouter = require("../routes/index.routes");

const app = express();

// middleware --->
app.use((req, res, next) => {
  console.log("This middleware is between app and router");
  next();
});

// routes
app.use("/", indexRouter);

module.exports = app;
