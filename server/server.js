// Catch hold (import) of the Express Library.
const express = require("express");
// Now create an instance of the Express Library to do our app.
const app = express();
// Define a port for Express App to listen to.
const port = 3100;
// Get routes.
const root = require("./routes/root");
const users = require("./routes/users");

// Use the routes.
app.use("/", root);
app.use("/users", users);

// Listen to 3100 port.
app.listen(port, () => {
  console.log("Successfully started the server on port " + port);
});
