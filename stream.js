var fs = require('fs');

var reader = fs.createReadStream('/dev/ttyACM0');
var data = '';

reader.on('data', function(chunk){
  // console.log(data);
  data += chunk;
});
reader.on('end', function(){
  console.log(data);
})
