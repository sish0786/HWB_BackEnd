require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const itemsrouter = require('./routes/itemrequest-routes');
const airportrouter = require('./routes/airportPickup-routes');



const app = express();
const port  = Number(process.env.PORT) || 6000;
const mongoURL = process.env.MONGO_URL || "";

app.use(express.json());
app.use("/api" , itemsrouter);
app.use("/api" , airportrouter);

mongoose.connect(mongoURL).then(()=>app.listen(port,()=>{
    console.log(`Connected to MongoDb and Listening on Port ${port}`);
})).catch((err)=>{
    console.log(err);
})