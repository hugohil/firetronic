var id = new Date().getTime();
var serialport = require("serialport");
var SerialPort = serialport.SerialPort;
var portName = process.argv[2];
var auth = require('./auth.json');

var request = require('request');

var myPort = new SerialPort(portName, {
  baudRate: 115200,
  parser: serialport.parsers.readline("\r\n")
});

myPort.on('open', showPortOpen);
myPort.on('data', saveLatestData);
myPort.on('close', showPortClose);
myPort.on('error', showError);

function showPortOpen() {
   console.log('port open. Data rate: ' + myPort.options.baudRate);
}

function saveLatestData(data) {
  if(data > 0){
    request({
        url: auth.firebase + id + '.json',
        method: 'PUT',
        json: {foo: data}
      });
    console.log(data);
  }
}

function showPortClose() {
   console.log('port closed.');
}

function showError(error) {
   console.log('Serial port error: ' + error);
}
