// controllers/locations.controller.js

const express = require("express");
const locationsArray = require("../models/location.model");
const location = express.Router();

location.get("/", (req, res) => {
  res.status(200).send(locationsArray);
});

module.exports = location;
