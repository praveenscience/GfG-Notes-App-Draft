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

module.exports = app;
