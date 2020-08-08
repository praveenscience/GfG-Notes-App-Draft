const express = require("express");
const app = express.Router();

// Created the notes database.
const notes = [];

// List all notes.
app.get("/", (req, res) => {
  // Show all the notes if user is logged in.
  if (!!req.session.User) {
    res.json(notes);
  } else {
    res.status(401).json("You need to login to see all notes!");
  }
});

// Create a new note.
app.post("/", (req, res) => {
  // Create a new note.
  // Check the POST request for all the required fields in req.body.
  // Push the particular note.
  res.json("ToDo.");
});

module.exports = app;
