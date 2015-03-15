// var id = new Date().getTime();
var auth = require('./auth.json');
var id = auth.deviceID;
var request = require('request');
var sensorLib = require('node-dht-sensor');
var model = Number(process.argv[2]);
var pin = (process.argv[3]);

var sensor = {
  initialize: function () {
    return sensorLib.initialize(model, pin);
  },
  read: function () {
    var readout = sensorLib.read();
    request({
      url: auth.firebase + id + '.json',
      method: 'PUT',
      json: {
        temp: readout.temperature.toFixed(2),
        hum: readout.humidity.toFixed(2)
      }
    });
    console.log('Temperature: ' + readout.temperature.toFixed(2) + 'C, ' + 'humidity: ' + readout.humidity.toFixed(2) + '%');
    setTimeout(function () {
        sensor.read();
    }, 2000);
  }
};

if (sensor.initialize()) {
    sensor.read();
} else {
    console.warn('Failed to initialize sensor');
}
