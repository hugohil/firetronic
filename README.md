# Fireduino

### Work in progress

Push sensor data to firebase

### Installation

```
$ npm i
```

### Usage

If, for example, your arduino is located on /dev/ttyACM0, type:
```
$ node fireduino.js /dev/ttyACM0
```

You'll push to firebase everything that you `Serial.print()` on the Arduino side.
