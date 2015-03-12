# Fireduino

### Work in progress

Push sensor data to firebase

### Installation

node_modules are pushed to the repository because Arduino Yùn's OpenWRT does not support npm installation.

You'll need to duplicate `auth.json.example` into `auth.json` and put your db address.

### Usage

If, for example, your arduino is located on /dev/ttyACM0, type:
```
$ node fireduino.js /dev/ttyACM0
```

You'll push to firebase everything that you `Serial.print()` on the Arduino side.
