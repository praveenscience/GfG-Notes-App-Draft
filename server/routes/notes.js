const express = require("express");
const app = express.Router();

// Created the notes database.
const notes = [];

// List all notes.
app.get("/", (req, res) => {
  // Show all the notes.
  res.json(notes);
});

module.exports = app;
