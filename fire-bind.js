//var mdns = require('mdns');

//var ad = mdns.createAdvertisement(mdns.tcp('http'), 1337);
//ad.start();

var id = require('./auth').deviceID;
var http = require('http');

var server = http.createServer(function(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Request-Method', '*');
  res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
  res.setHeader('Access-Control-Allow-Headers', '*');
  res.writeHead(200);

  res.end(id);

});

server.listen(1337);
