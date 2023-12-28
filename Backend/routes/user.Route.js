const express = require("express");
const UserModel = require("../model/user.Model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { authentication } = require("../middleware/auth.middleware");

require("dotenv").config();

const userRouter = express.Router();

userRouter.post("/registerData", async (req, res) => {
  const { username, email, password, name, phone } = req.body;
  console.log("req", req.body);
  let userExist = await UserModel.findOne({ email });
  console.log("req", req.body);
  if (userExist) {
    return res.status(400).json({
      msg: "Email already exists, please login or signup with another email",
      state: true,
    });
  }
  try {
    bcrypt.hash(password, 5, async (err, security) => {
      if (err) {
        console.log(err);
      } else {
        const user = new UserModel({
          username,
          email,
          name,
          phone,
          password: security,
        });

        await user.save();
        res.json(user);
      }
    });
  } catch (error) {
    res.send({ message: "error in registering the user" });
  }
});

userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    if (user.length > 0) {
      bcrypt.compare(password, user.password, (err, result) => {
        if (result) {
          const token = jwt.sign({ userID: user[0].id }, process.env.key);
          console.log("token", token);
          res.send({ messsage: "Login successful", token: token });
        } else {
          res.send({ messsage: "Wrong credentials..try again" });
        }
      });
    } else {
      res.send({ messsage: "credentials are wrong" });
    }
  } catch (error) {
    res.send({ messsage: "something went wrong,try again" });
  }
});

module.exports = { userRouter };
