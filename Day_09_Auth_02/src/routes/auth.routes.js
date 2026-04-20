// Import express framework
const express = require("express");

// Import user model
const userModel = require("../models/user.model");

// Import jsonwebtoken for token creation and verification
const jwt = require("jsonwebtoken");

// Create router
const router = express.Router();

/*  POST /register  => req.body = {username , password} */
// Register new user
router.post("/register", async (req, res) => {
  // Get username and password from request body
  const { username, password } = req.body;

  // Check if user already exists
  const isUserExists = await userModel.findOne({
    username,
  });

  // If user already exists
  if (isUserExists) {
    return res.status(409).json({
      message: "User is already exists",
    });
  }

  // If user does not exist, create new user
  const user = await userModel.create({
    username,
    password,
  });

  // Create JWT token using user id
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRETE);

  // Set token in cookies
  res.cookie("chacha", token);

  // Send response
  res.status(201).json({
    message: "User registered Successfully",
    user,
  });
});

/* POST /login */
// Login user
router.post("/login", async (req, res) => {
  // Get username and password
  const { username, password } = req.body;

  // Find user in database
  const user = await userModel.findOne({
    username,
  });

  // If user not found
  if (!user) {
    return res.status(404).json({
      message: "User is not found",
    });
  }

  // Check password
  const isPasswordValid = user.password === password;

  // If password incorrect
  if (!isPasswordValid) {
    return res.status(401).json({
      message: "invalid password",
    });
  }

  // If password correct, create token again
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRETE);

  // Set cookie with expiry (7 days)
  res.cookie("chacha", token, {
    expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),
  });

  // Send response
  res.status(200).json({
    message: "user logged in successfully",
    user,
  });
});

/* GET /user */
// Get logged-in user data
router.get("/user", async (req, res) => {
  // Get token from cookies
  const token = req.cookies.chacha;

  // If token not found
  if (!token) {
    return res.status(401).json({
      message: "Unauthorized token not found",
    });
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRETE);

    // Find user using decoded id
    const user = await userModel.findOne({
      _id: decoded.id,
    });

    // Send user data
    return res.status(200).json({
      message: "user data fetched Successfully",
      user,
    });
  } catch (error) {
    // If token invalid
    res.status(401).json({
      message: "Unauthorized invalid token",
    });
  }
});

/* GET /logout */
// Logout user
router.get("/logout", (req, res) => {
  // Clear cookie
  res.clearCookie("chacha");

  // Send response
  res.status(200).json({
    message: "user logged out successfully",
  });
});

// Export router
module.exports = router;
