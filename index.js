require('dotenv').config()
const express = require("express");
const app = express();
const port = 4000;

const githubData={
  "login": "octocat",
  "id": 583231,
  "avatar_url": "https://avatars.githubusercontent.com/u/583231?v=4",
  "html_url": "https://github.com/octocat",
  "public_repos": 8,
  "followers": 9900,
  "following": 9,
  
}


app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/telegram", (req, res) => {
  res.send("naveen_rathore.007");
});
app.get("/login", (req, res) => {
  res.send("<h1>Please Login in telegram</h1>");
});
app.get("/github", (req, res) => {
  res.json(githubData)
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
