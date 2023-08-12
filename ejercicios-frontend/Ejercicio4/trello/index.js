var express = require("express");
var mysql = require("mysql");
var bodyParser = require("body-parser");

var app = express();

app.get("/",function(peticion, respuesta){
	respuesta.send("Hola mundo");
});

app.listen(3000);