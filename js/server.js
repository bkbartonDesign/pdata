var express = require('express');
var app = express();

var data = {
	test:"Found it"
}


app.get('/', function(req, res){
  //res.send(data);
  res.json({test:"Found it 2"});
});



var server = app.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);
});