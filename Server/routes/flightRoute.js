const express = require("express");
const { getFlights } = require("../controller/flightController");


const router = express.Router();

router.get("/", getFlights);

module.exports = router; 
