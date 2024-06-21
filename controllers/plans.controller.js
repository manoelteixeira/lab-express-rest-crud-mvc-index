// controllers/plans.controller.js

const express = require("express");
const plansArray = require("../models/plan.model");
const plan = express.Router();

plan.get("/", (req, res) => {
  res.status(200).send(plansArray);
});

module.exports = plan;
