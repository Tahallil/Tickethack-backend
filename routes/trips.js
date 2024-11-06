var express = require("express");
var router = express.Router();

//const fetch = require("node-fetch");
const Trip = require("../models/trips");
const moment = require("moment");

router.get("/", (req, res) => {
  Trip.find().then((data) => {
    res.json({ result: true, allTrip: data });
  });
});

router.get("/search/:departure/:arrival/:date", (req, res) => {
  console.log(req.params.departure, req.params.arrival);
  Trip.find({
    departure: { $regex: new RegExp(req.params.departure, "i") },
    arrival: { $regex: new RegExp(req.params.arrival, "i") },
    date: {
      $gte: moment(req.params.date).startOf("day"),
      $lte: moment(req, params.date).endOf("day"),
    },
  }).then((data) => {
    if ({ result: true }) {
      res.json(data);
    } else {
      res.json({ result: false, error: "No trip found." });
    }
  });
});

module.exports = router;
