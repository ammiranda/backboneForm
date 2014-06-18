'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/build'));
app.use(bodyParser.json());

app.get('/item.json', function(req, res){
	res.sendfile('./item.json');
});

app.post('/item.json', function(req){
	console.log(req.body);	
});

app.get('/enums.json', function(req, res){
	res.sendfile('./enums.json');
});

app.listen(port, function(){
	console.log('Listening on port ' + port);
});
