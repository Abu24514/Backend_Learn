// Import express framework
const express = require("express");

// Import user model (database schema)
const userModel = require("../models/user.model");
// Create router instance
const router = express.Router();

/* POST  => /auth/register */
// Register new user

router.post("/register", async (req, res) => {
  // Get username and password from request body
  const { username, password } = req.body;

  // Create new user in database
  const user = await userModel.create({
    username,
    password,
  });

  // Send success response
  res.status(201).json({
    message: "User registered successfully.",
    user,
  });
});

/* POST  => /auth/login */
// Login user
router.post("/login", async (req, res) => {
  // Get username and password from request body
  const { username, password } = req.body;

  // Find user in database by username
  const user = await userModel.findOne({
    username,
  });

  // If user not found
  if (!user) {
    return res.status(401).json({
      message: "User is not found [Invalid user]",
    });
  }

  // Check if password matches
  const isPasswordValid = password === user.password;

  // If password is incorrect
  if (!isPasswordValid) {
    return res.status(401).json({
      message: "Invalid password",
    });
  }

  // If login successful
  res.status(200).json({
    message: "User logging successfully",
  });
});

// Export router
module.exports = router;
