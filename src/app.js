const express = require("express");

const app = express();

//this will only handle GET call to /user
app.get("/user", (req, res) => {
  res.send({ firstName: "Neyaz", lastName: "Khan" });
});

//this will only handle POST call to /user
app.post("/user", (req, res) => {
  //saving data to db
  res.send("Data successfully saved to the database");
});

//this will only handle DELETE call to /user
app.delete("/user", (req, res) => {
  //deleting data from db
  res.send("Data successfully deleted from the database");
});

//this will match all the HTTP method API calls to /test
app.use("/test", (req, res) => {
  res.send("Hello from the server");
});

app.listen(7777, () => {
  console.log("Server is successfully listening on port 7777...");
});
