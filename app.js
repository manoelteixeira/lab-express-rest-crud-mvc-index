// app.js
const express = require("express");
const location = require("./controllers/locations.controller");
const person = require("./controllers/persons.controller");
const plan = require("./controllers/plans.controller");
const machine = require("./controllers/machines.controller");
const specialEvent = require("./controllers/special-events.controller");

// Express Server Instance
const app = express();

// Middleware
app.use("/locations", location);
app.use("/persons", person);
app.use("/plans", plan);
app.use("/machines", machine);
app.use("/special-events", specialEvent);

// Home Route
app.get("/", (req, res) => {
  res.status(200).send("Hello, world!");
});

// All inexistent routes
app.get("*", (req, res) => {
  res.status(404).send("<h1>ERROR 404</h1><h3>Sorry, no page found!</h3>");
});

module.exports = app;
