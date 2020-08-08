const express = require("express");
const app = express.Router();

// Created the notes database.
const notes = [];

// Work with notes only if user is logged in.
app.use((req, res, next) => {
  if (!req.session.User) {
    res.status(401).json("You need to login to work with notes!");
  } else {
    next();
  }
});

// List all notes.
app.get("/", (req, res) => {
  // Show all the notes.
  res.json(notes);
});

// Create a new note.
app.post("/", (req, res) => {
  // Create a new note.
  // Check the POST request for all the required fields in req.body.
  // Push the particular note.
  res.json("ToDo.");
});

module.exports = app;
