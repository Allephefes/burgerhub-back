
var express = require('express');
var app= express();
var mongoose= require('mongoose');
//var CurrentProduct = require('./ProductModel');
var bodyParser = require('body-parser');
var api = require('./api/api');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use('/api',api);

var strConnect = "mongodb://asaf:asaf@cluster0-shard-00-00-dn6sy.mongodb.net:27017,cluster0-shard-00-01-dn6sy.mongodb.net:27017,cluster0-shard-00-02-dn6sy.mongodb.net:27017/product?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true";
const OPT = {useNewUrlParser:true};
mongoose.connect(strConnect, OPT);
var port = process.env.PORT || 3000;
app.listen(port, function(){
console.log("Running om port " + port);
})