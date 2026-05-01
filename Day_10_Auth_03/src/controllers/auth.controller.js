// api ke ander kya hoga aur kaise hoga uske kaam mein ayengi.

const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

async function registerController(req, res) {
    const { username, password } = req.body;
    const isUserExists = await userModel.findOne({
        username
    });
    if (isUserExists) {
        return res.status(400).json({
            message: "Account already exists"
        });
    };
    // user not exists then.
    const user = await userModel.create({
        username,
        password: await bcrypt.hash(password, 10),
    })
    // fir token generate karenge 
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

    // token save karenge
    res.cookie("meem", token);
    return res.status(201).json({
        message: "User registered successfully",
        user
    })
}

async function LoginController(req, res) {
    const { username, password } = req.body;
    const user = await userModel.findOne({
        username
    });

    if (!user) {
        return res.status(400).json({
            message: "User not found"
        });

    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    //    password incorrect
    if (!isPasswordValid) {
        return res.status(400).json({
            message: "Invalid password"
        });
    }

    // if password is correct
    const token = jwt.sign({id : user._id} , process.env.JWT_SECRET);

    // save in cookie
    res.cookie("meem" , token);
    
    res.status(200).json({
        message :"User logged in successfully",
     user:{
        username: user.username,
        id:user._id
     },
    })
}

module.exports = {
    registerController,
    LoginController,
}