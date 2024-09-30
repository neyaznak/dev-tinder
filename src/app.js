const express = require("express");

const app = express();

app.use("/", (err, req, res, next) => {
  if (err) {
    //Log your error
    res.status(500).send("Something went wrong");
  }
});

app.get("/getUserData", (req, res, next) => {
  // try {
    //logic of DB call and get user data
    throw new Error("aagfdsgfdshvjd");
    res.send("User Data Sent");
  // } catch (err) {
  //   res.status(500).send("Some error contact support team");
  // }
});

app.use("/", (err, req, res, next) => {
  if (err) {
    //Log your error
    res.status(500).send("Something went wrong");
  }
});

app.listen(7777, () => {
  console.log("Server is successfully listening on port 7777...");
});
