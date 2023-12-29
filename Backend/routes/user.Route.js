const express = require("express");
const UserModel = require("../model/user.Model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { authentication } = require("../middleware/auth.middleware");

require("dotenv").config();

const userRouter = express.Router();

userRouter.post("/registerData", async (req, res) => {
  const { name, username, email, password, phonenumber } = req.body;
  console.log("req", req.body);

  try {
    let userExist = await UserModel.findOne({ email });

    if (userExist) {
      return res.status(400).json({
        msg: "Email already exists, please login or signup with another email",
        state: true,
      });
    }

    bcrypt.hash(password, 5, async (err, hash) => {
      if (err) {
        return res.status(400).json({ error: err.message });
      }

      const user = new UserModel({
        name,
        username,
        email,
        phonenumber,
        password: hash,
      });

      await user.save();
      res.json({ msg: "New user registered" });
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Internal server error" });
  }
});

userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  console.log(req.body);
  if (email && password) {
    try {
      const user = await UserModel.findOne({ email });
      if (user) {
        bcrypt.compare(password, user.password, (err, result) => {
          if (result) {
            var token = jwt.sign(
              { userID: user._id, user: user.firstName },
              process.env.secret
            );
            res.cookie("token", token, { httpOnly: true });
            res.json({ msg: "Logged In!", token, user: user.firstName });
          } else {
            res.status(400).json({ msg: "Wrong Credentials" });
          }
        });
      } else {
        res.status(400).json({
          msg: "User does not exist. Please Register first",
          newuser: true,
        });
      }
    } catch (err) {
      res.status(400).json({ msg: err.message });
    }
  } else {
    res
      .status(404)
      .json({ msg: `Please enter - ${!email ? "email" : "password"}` });
  }
});

module.exports = { userRouter };
