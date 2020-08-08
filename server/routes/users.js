const express = require("express");
const app = express.Router();

const users = [
  { username: "Praveen", password: "Praveen", fullname: "Praveen Kumar" },
  { username: "Rohit", password: "Rohit123", fullname: "Rohit GfG" },
  { username: "Kumar", password: "Kumar@Hello", fullname: "Kumar GfG" },
  { username: "Kshitij", password: "k$h!t1j", fullname: "Kshitij GfG" }
];

app.get("/", (req, res) => {
  res.json("Sorry, this route is not accessible!");
});

app.post("/login", (req, res) => {
  const matchedUser = {
    ...users.find(
      user =>
        user.username === req.body.username &&
        user.password === req.body.password
    )
  };
  if (matchedUser.username && matchedUser.username.length > 3) {
    delete matchedUser.password;
    req.session.User = matchedUser;
    res.json("User logged in successfully as " + matchedUser.fullname + ".");
  } else {
    delete req.session.User;
    res.status(401).json("Username or password is wrong.");
  }
});

app.post("/new", (req, res) => {
  if (
    req.body.username &&
    req.body.username.trim().length > 3 &&
    req.body.password &&
    req.body.password.trim().length > 3 &&
    req.body.fullname &&
    req.body.fullname.trim().length > 3
  ) {
    if (users.filter(user => user.username === req.body.username).length > 0) {
      // User already exists.
      res.status(409).json("User already exists.");
    } else {
      // All good.
      users.push({
        username: req.body.username,
        password: req.body.password,
        fullname: req.body.fullname
      });
      res
        .status(201)
        .json(
          "User " + req.body.username + " created successfully. Please login."
        );
    }
  } else {
    res
      .status(400)
      .json(
        "Send all three username, password, fullname for creating a user and each of them should be at least 4 characters long."
      );
  }
});

app.get("/:index", (req, res) => {
  if (req.params.index > users.length - 1) {
    res.status(404).json("User doesn't exist.");
  } else {
    res.json(users[req.params.index]);
  }
});

module.exports = app;
