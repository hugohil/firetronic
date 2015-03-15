#!/bin/sh

# All credits goes to walkerlindley
# https://walkerlindley.wordpress.com/2014/03/12/arduino-yun-and-git/

rm -rf firetronic
curl -l -k https://codeload.github.com/hugohil/firetronic/zip/master > archive.zip
unzip archive.zip -d .
mv firetronic-master firetronic
rm -f archive.zip
cp -R fireduino_modules/ firetronic/node_modules
# once you have your auth.json file, copy it in the same folder as this script and uncomment this line
# cp auth.json firetronic/
