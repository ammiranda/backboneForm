var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/build'));
app.use(bodyParser.json());

app.get('/item.json', function(req, res){
	res.sendfile('./item.json');
});

app.get('/enums.json', function(req, res){
	res.sendfile('./enums.json');
});

app.post('/', function(req, res){
	console.log(req.body);	
});

app.listen(port, function(){
	console.log("Listening on port " + port);
});
