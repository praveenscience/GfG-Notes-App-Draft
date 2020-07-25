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
  if (req.params.index > users.length - 1) {
    res.status(404).json("User doesn't exist.");
  } else {
    res.json(users[req.params.index]);
  }
});

app.post("/", (req, res) => {
  if (!!req.body.name) {
    res.status(201).json(users.push(req.body.name) - 1);
  } else {
    res.status(400).json("You need name parameter set.");
  }
});

module.exports = app;
