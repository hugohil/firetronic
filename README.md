# Firetronic

Set of useful scripts to push sensor data to firebase.

## Work in progress

## Installation

Run
```shell
$ node configure.js https://xxxxx-yyyy-1234.firebaseio.com/
```
With the right db address. This will create an `auth.json` with the db address and an UUID for your device which will be the key to retrieve your sensor data. It would make sens to execute this script just once in order not to lost your previous datas key.

#### Arduino Yùn
You'll probably ~~want~~ need to read [this](http://blog.arduino.cc/2014/05/06/time-to-expand-your-yun-disk-space-and-install-node-js/).

You won't be able to just perform a `npm i` inside the firetronic folder on the Yùn, so you should install the `node_modules` on your machine and copy it on the Yùn SD card by hand. The following commands will get you started quickly.

Type this on your machine (i.e not the Yùn):

```shell
$ git clone git@github.com:hugohil/firetronic.git
$ cd firetronic && npm i
$ scp yun-update.sh root@arduino.local:/root/
$ scp -r node_modules/ root@arduino.local:/root/firetronic_modules
$ ssh root@arduino.local
$ cd root/ && chmod +x yun-update.sh
$ ./yun-update.sh
```

That's it !

#### Raspberry Pi

Currently, interaction with raspberry pi only consists in reading datas from a [DHT](https://learn.adafruit.com/dht/overview) sensor. The `firePiDHT.js` script rellies heavily on the [node-dht-sensor](https://github.com/momenso/node-dht-sensor) lib by [David Jose Momenso](https://github.com/momenso) (basically, it just wraps his example script and add firebase requests).

You'll need is a [proper bcm2835 installation](http://www.airspayce.com/mikem/bcm2835/)and a good ol' `npm i`.

## Usage

#### Arduino
If, for example, your arduino is located on /dev/ttyACM0, type:
```shell
$ node fire-duino-serial.js /dev/ttyACM0
```
> On Arduino Yùn, serial port for the ATmega 32U4 can be found at /dev/ttyATH0

You'll push to firebase everything that you `Serial.print()` on the Arduino side.

#### Raspberry Pi

```shell
$ node fire-pi-DHT.js 22 4
```
Where 22 is my DHT model, and 4 is the GPIO pin attached to the DHT datas (you can of course use any GPIO pin you want).
