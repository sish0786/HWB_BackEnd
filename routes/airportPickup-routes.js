const express = require("express");
const { getAirportPickups, postAirportPickup } = require("../controller/airportPickup-controller");

const router = express.Router();

router.get('/airportPickups',getAirportPickups);
router.get('/airportPickups/:id',getAirportPickups);
router.post('/airportPickups',postAirportPickup);

module.exports = router;