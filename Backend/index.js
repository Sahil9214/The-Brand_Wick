const express = require("express");
const connection = require("./configs/db");
const { userRouter } = require("./routes/user.Route");
const { authentication } = require("./middleware/auth.middleware");

require("dotenv").config();
const cors = require("cors");
const app = express();
app.use(express.json());
const port=7898

app.use(cors());
app.get("/", (req, res) => {
  res.send("Welcome to homepage Backend");
});

app.use("/", userRouter);

app.listen(port, async () => {
  try {
    await connection;
    console.log("Connnection succesfully to db");
  } catch (error) {
    console.log(error);
  }
  console.log("Port Running at 8080");
});
