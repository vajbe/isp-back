//jshint esversion: 6
const express = require("express");
const mongoose = require("mongoose");
const apiRoutes = require(__dirname + '/server/routes/api-routes');

const app = express();

app.listen(5000,() => {
    console.log("Server has started...");
});

mongoose.connect('mongodb+srv://admin:admin@cluster0-1ljgs.mongodb.net/master?retryWrites=true', {useNewUrlParser: true},(err)=>{
    if(!err){
        console.log("Successfully connected to DB");
    }
    else
        console.log(err);
});

app.use('/',apiRoutes);