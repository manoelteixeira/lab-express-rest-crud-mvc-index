// app.js
const express = require("express");

// Express Server Instance
const app = express();

// Home Route
app.get("/", (req, res) => {
  res.status(200).send("Hello, world!");
});

// All inexistent routes
app.get("*", (req, res) => {
  res.status(404).send("<h1>ERROR 404</h1><p>Page Not Found!</p>");
});

module.exports = app;
