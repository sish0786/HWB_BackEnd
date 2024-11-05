const mongoose = require('mongoose');

const SCHEMA = mongoose.Schema;

const airportPickupSchema = new SCHEMA({
    name:{
        type: String,
        required: true,
    },
    phNo:{
        type: String,
        required:true
    },
    flightNo:{
        type: String, 
        required: true,   
    },
    date:{
        type: Date,
        required: true
    },
    mealPreference:{
        type: String,
        required: true
    }
    
})

module.exports = mongoose.model("AirportPickup",airportPickupSchema);