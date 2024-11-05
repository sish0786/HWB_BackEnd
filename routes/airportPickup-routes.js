const express = require("express");
const { getAirportPickups, postAirportPickup, deleteAirportPickup } = require("../controller/airportPickup-controller");

const router = express.Router();

router.get('/airportPickups',getAirportPickups);
router.get('/airportPickups/:id',getAirportPickups);
router.post('/airportPickups',postAirportPickup);
router.delete('/airportPickups/:id',deleteAirportPickup);

module.exports = router;