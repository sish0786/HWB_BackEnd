const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/itemrequest-routes,');



const app = express();

app.use(express.json());
app.use("/" , router);

mongoose.connect(
    "mongodb+srv://homewithoutbordersfl:sheharoz123@hwbcluster.qgtje.mongodb.net/?retryWrites=true&w=majority&appName=hwbcluster"
).then(()=>app.listen(5000,()=>{
    console.log("Connected to MongoDb and Listening on Port 5000");
})).catch((err)=>{
    console.log(err);
})