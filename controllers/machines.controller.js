// controllers/machines.controller.js

const express = require("express");
const machinesArray = require("../models/machine.model");
const machine = express.Router();

machine.get("/", (req, res) => {
  res.status(200).send(machinesArray);
});

module.exports = machine;
