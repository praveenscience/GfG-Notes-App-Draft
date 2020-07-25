const express = require("express");
const app = express.Router();

const users = [
  "Praveen Kumar",
  "Kumar",
  "Rohit",
  "Kshitij",
  "Healer",
  "Jinendra"
];

app.get("/", (req, res) => {
  res.json(users);
});

app.get("/:index", (req, res) => {
  if (req.params.index > users.length) {
    res.status(404).json("User doesn't exist.");
  } else {
    res.json(users[req.params.index]);
  }
});

module.exports = app;
