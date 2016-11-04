
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs =require('fs');

app.use('/static', express.static(__dirname + '/public'));


var server = app.listen(2000, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)

});
