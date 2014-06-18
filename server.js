var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/build'));

app.get('/item.json', function(req, res){
	res.sendfile('./item.json');
});

app.get('/enums.json', function(req, res){
	res.sendfile('./enums.json');
});

app.listen(port, function(){
	console.log("Listening on port " + port);
});
