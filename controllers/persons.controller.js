// controllers/persons.controller.js

const express = require("express");
const personsArray = require("../models/person.model");
const person = express.Router();

person.get("/", (req, res) => {
  res.status(200).send(personsArray);
});

module.exports = person;
