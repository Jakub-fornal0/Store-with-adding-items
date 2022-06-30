require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const tokenVerification = require("./middleware/tokenVerification");

app.use(express.json());
app.use(cors());
app.use("/public", express.static("public"));

function setupCORS(req, res, next) {
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "X-Requested-With, Content-type,Accept,X-Access-Token,X-Key"
  );
  res.header("Access-Control-Allow-Origin", "*");
  if (req.method === "OPTIONS") {
    res.status(200).end();
  } else {
    next();
  }
}
app.all("/*", setupCORS);

const connection = require("./db");
connection();

const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const itemRoutes = require("./routes/items");
// routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

app.use(tokenVerification);
app.use("/api/items", itemRoutes);

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Nasłuchiwanie na porcie ${port}`));
