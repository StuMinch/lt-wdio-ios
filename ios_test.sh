#!/bin/bash

for i in {1..25}
do
  echo "Run #$i"
  npx wdio run ios-trr.conf.js
done

