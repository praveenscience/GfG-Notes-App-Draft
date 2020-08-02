// Catch hold (import) of the Express Library.
const express = require("express");
// Import morgan, cors, session and nodemailer.
const morgan = require("morgan");
const cors = require("cors");
const session = require("express-session");
const nodemailer = require("nodemailer");
// Now create an instance of the Express Library to do our app.
const app = express();
// Define a port for Express App to listen to.
const port = 3100;
// Get routes.
const root = require("./routes/root");
const users = require("./routes/users");

// Let's add some middleware.
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
app.use(
  session({
    secret: "gfg-geeks",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
  })
);

// Use the routes.
app.use("/", root);
app.use("/users", users);

app.get("/email", async (req, res) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "gfg4everyone@gmail.com",
      pass: "qwerty@123"
    }
  });
  const info = await transporter.sendMail({
    from: '"Fred Foo 👻" <foo@example.com>',
    to: "gfg4everyone@gmail.com",
    subject: "Hello ✔ from Node JS!", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>" // html body
  });
  res.json({ info, previewUrl: nodemailer.getTestMessageUrl(info) });
});

// Listen to 3100 port.
app.listen(port, () => {
  console.log("Successfully started the server on port " + port);
});
