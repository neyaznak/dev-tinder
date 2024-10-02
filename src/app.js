const express = require("express");
const connectDB = require("./config/database");
const app = express();

const User = require("./models/user");

app.post("/signup", async (req, res) => {
  //creating a new instance of the User model
  const user = new User({
    firstName: "Rohit",
    lastName: "Sharma",
    emailId: "rohit@sharma.com",
    password: "rohit@123",
  });

  try {
    await user.save();
    res.send("User Added Successfully!");
  } catch (err) {
    err.status(400).send("Error saving the user:" + err.message);
  }
});

connectDB()
  .then(() => {
    console.log("Database connection established...");
    app.listen(7777, () => {
      console.log("Server is successfully listening on port 7777...");
    });
  })
  .catch((err) => {
    console.log("Database cannot be connected...");
  });
