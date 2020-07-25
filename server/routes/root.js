const express = require("express");
const app = express.Router();

app.get("/", (req, res) => {
  const ua = req.headers["user-agent"].toLowerCase();
  if (ua.indexOf("postman") === 0)
    res.json({
      Message: "Hello Developer!",
      Error: false,
      Headers: req.headers
    });
  else if (ua.indexOf("curl") === 0)
    res.json({
      Message: "Go away hacker! Access denied!",
      Error: true
    });
  else
    res.json({
      Message: "Hello GfG Route!",
      Error: false
    });
});

app.post("/", (req, res) => {
  res.json({
    Message: "POST here is not accepted!",
    Error: true
  });
});

module.exports = app;
