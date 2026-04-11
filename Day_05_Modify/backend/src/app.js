const express = require("express");
const songRoutes = require("./routes/song.routes");
const cors = require ('cors')

const app = express();
// Middleware
app.use(cors());
app.use(express.json()); // for only raw data , for file data use multer

app.use("/", songRoutes);






module.exports = app;
