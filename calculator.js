const express = require("express");
const bodyParser = require("body-parser");
//bodyPaser npm package for manipulate data.

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
//parse the data that comes from an HTML form.
//extended:true allows to post nested objects.

app.get("/", function(req,res){
    res.sendFile(__dirname + "/index.html"); 
    //__dirname: grab current file path at any given time.
});

//app.post-handle the post request specified inside ""
app.post("/",function(req,res){

var num1 = Number(req.body.num1);
var num2 = Number(req.body.num2);

var result = num1 + num2;

res.send("The results of the calculation is: " + result);

});

app.get("/bmi",function(req,res){
    res.sendFile(__dirname+"/bmiCalculator.html");
});

app.post("/bmi",function(req,res){
    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);
    var result = weight / (height*height);
    //console.log(req.body); //check
    res.send("Your BMI is: " + result);
});

//req.body: parsed version of the HTTP request
    //console.log(req.body); //form of text.
    //console.log(req.body.num1); //html name=num1

app.listen(3000,function(){
    console.log("Server Started: 3000");
});



