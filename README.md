# Fireduino

### Work in progress

Push sensor data to firebase

### Installation

You'll probably want to read [this](http://blog.arduino.cc/2014/05/06/time-to-expand-your-yun-disk-space-and-install-node-js/).

node_modules are pushed to the repository because Arduino Yùn's OpenWRT does not support npm installation.

You'll need to duplicate `auth.json.example` into `auth.json` and put your db address.

If, like me, you are using an Arduino Yùn, create a `.sh` script somewhere in it and put this in it:
```bash
#!/bin/sh
rm -rf fireduino
curl -l -k https://codeload.github.com/hugohil/fireduino/zip/master > archive.zip
unzip archive.zip -d .
mv fireduino-master fireduino
rm -f archive.zip
# once you have your auth.json file, copy it in the same folder as this script and uncomment this line
# cp auth.json fireduino/
```
(all credits goes to [walkerlindley](https://walkerlindley.wordpress.com/2014/03/12/arduino-yun-and-git/))

### Usage

If, for example, your arduino is located on /dev/ttyACM0, type:
```
$ node fireduino.js /dev/ttyACM0
```
> On Arduino Yùn, serial port for the ATmega 32U4 can be found at /dev/ttyATH0

You'll push to firebase everything that you `Serial.print()` on the Arduino side.
