const express = require("express");

const app = express();

app.get("/",(req, res) => {
    res.send("Hi Neyaz");
  });
app.get("/hello",(req, res) => {
    res.send("hello hello hello");
  });

app.get("/test",(req, res) => {
  res.send("hello from the server");
});

app.listen(7777, () => {
  console.log("Server is successfully listening on port 7777...");
});
