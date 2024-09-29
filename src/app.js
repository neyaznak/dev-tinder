const express = require("express");

const app = express();

app.get("/user/:userId/:name/:age", (req, res) => {
    //console.log(req.query)
    console.log(req.params)
  res.send({ firstName: "Neyaz", lastName: "Khan" });
});

app.listen(7777, () => {
  console.log("Server is successfully listening on port 7777...");
});
