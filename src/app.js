const express = require("express");

const app = express();

const { adminAuth, userAuth } = require("./middlewares/auth");

app.use("/admin", adminAuth);
app.use("/user", userAuth);

app.get("/user", (req, res, next) => {
  res.send("User Data Sent");
});
app.get("/admin/getAllData", (req, res, next) => {
  res.send("All Data Sent");
});
app.get("/admin/deleteUser", (req, res, next) => {
  res.send("User Deleted");
});

app.listen(7777, () => {
  console.log("Server is successfully listening on port 7777...");
});
