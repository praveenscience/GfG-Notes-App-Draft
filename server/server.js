// Catch hold (import) of the Express Library.
const express = require("express");
// Now create an instance of the Express Library to do our app.
const app = express();
// Define a port for Express App to listen to.
const port = 3100;

app.get("/", (req, res) => {
  console.log("Requested Path: " + req.path);
  console.log("Requested Method: " + req.method);
  console.log("Browser: " + req.headers["user-agent"]);
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
      Message: "Hello GfG!",
      Error: false
    });
});

// Listen to 3100 port.
app.listen(port, () => {
  console.log("Successfully started the server on port " + port);
});
