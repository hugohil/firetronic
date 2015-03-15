var uuid = require('node-uuid');
var fs = require('fs');
var firebase = process.argv[2];

var id = uuid.v4();

fs.writeFile(
  'auth.json',
  '{\n\t"firebase": "' + firebase + '",\n\t"deviceID": "' + id + '"\n}'
  , function (err) {
    if(err){
      console.log(err);
    }
  }
);
