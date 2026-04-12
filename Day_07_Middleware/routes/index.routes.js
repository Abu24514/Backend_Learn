const express = require("express");

const router = express.Router();

//  middleware
router.use((req, res, next) => {
  console.log("this middleware is between router and api");
  next();
});

router.get("/", (req, res) => {
  res.json({
    message: "Welcome to Cohort",
  });
});

module.exports = router;
