// controllers/special-events.controller.js

const express = require("express");
const specialEventsArray = require("../models/special-event.model");
const specialEvent = express.Router();

specialEvent.get("/", (req, res) => {
  res.status(200).send(specialEventsArray);
});

module.exports = specialEvent;
