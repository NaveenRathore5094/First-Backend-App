require('dotenv').config()
const express = require("express");
const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/telegram", (req, res) => {
  res.send("naveen_rathore.007");
});
app.get("/login", (req, res) => {
  res.send("<h1>Please Login in telegram</h1>");
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
