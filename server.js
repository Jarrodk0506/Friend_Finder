var express = require("express");
var path = require("path");


var app = express();
var PORT = 3500;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());