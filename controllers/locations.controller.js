// controllers/locations.controller.js

const express = require("express");
const locationsArray = require("../models/location.model");
const personsArray = require("../models/person.model");
const location = express.Router();

location.get("/", (req, res) => {
  res.status(200).send(locationsArray);
});

location.get("/people", (req, res) => {
  const locationPeople = locationsArray.map((loc) => {
    const people = personsArray.filter(
      (person) => person.mainLocation == loc.zip
    );
    return { ...loc, people };
  });
  res.status(200).send(locationPeople);
});

module.exports = location;
