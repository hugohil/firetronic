var id = new Date().getTime();
var portName = process.argv[2];
var auth = require('./auth.json');

var request = require('request');
var fs = require('fs');

var reader = fs.createReadStream(portName);
reader.setEncoding('utf8');
reader.on('data', function(data){
  request({
      url: auth.firebase + id + '.json',
      method: 'PUT',
      json: {foo: data}
    });
  console.log(data);
});
