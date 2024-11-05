const AirportPickup = require("../model/AirportPickup");

const getAirportPickups  = async (req,res,next)=>{
    const id = req.params.id;
    let airportPickups;

    try{
        if(id){
            airportPickups = await AirportPickup.findById(id);
        }
        else{
            airportPickups = await AirportPickup.find();
        }
    } catch(err){
        return next(err)
    }

    if(!airportPickups){
        return res.status(500).json({message: "Internal Server Error"});
    }
    return res.status(200).json({airportPickups});
}

const postAirportPickup  = async (req,res,next)=>{
    const {name, phNo, flightNo, date, mealPreference}  = req.body;
    if(!name && name.trim() == "" || !phNo && phNo.trim() == "" && phNo.length != 10 || !flightNo && flightNo.trim() == "" || !date && date.trim() == ""){
        return res.status(422).json({message: "Invalid Data"});
    }
    
    let airportPickup;

    try{
        airportPickup = new AirportPickup({
            name,phNo,flightNo,date,mealPreference
        });
        airportPickup = await airportPickup.save();       
    }catch(err){
        return next(err);
    }

    if(!airportPickup){
        return res.status(500).json({message: "Couldn't process Airport Pickup"});
    }

    return res.status(201).json({airportPickup});
}

const deleteAirportPickup = async (req,res,next) =>{
    const id = req.params.id;
    let airportPickup;

    try{
        airportPickup = await AirportPickup.findByIdAndDelete(id);
    }catch( err){
        return next(err);
    }

    if(!airportPickup){
        return res.status(500).json({message: "Couldn't delete Airport Pickup Request"});
    }

    return res.status(200).json({message: "Pickup Cancelled Successfully" });
}

exports.getAirportPickups = getAirportPickups;
exports.postAirportPickup = postAirportPickup;
exports.deleteAirportPickup = deleteAirportPickup;