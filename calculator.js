const express = require("express");
const app = express();

app.get("/", function(req,res){
    res.sendFile(__dirname + "/index.html"); 
    //__dirname: grab current file path at any given time.
});

app.listen(3000,function(){
    console.log("Server Started: 3000");
});



