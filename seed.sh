#!/bin/bash

if [ -z "$1" ]
  then
    echo "Usage: seed.sh destination"
    exit 1
fi

mkdir -p $1
cp .babelrc \
    .browserslistrc \
    .gitignore \
    .jsbeautifyrc \
    .htmlvalidate.json \
    README.md \
    Makefile app-config.json \
    webpack.config.js \
    webpack.preprocess.js \
    package.json $1
cp -R www $1
mkdir -p $1/cordova

cp -R ./cordova/README.md \
    ./cordova/build.json \
    ./cordova/config.xml.template \
    ./cordova/hooks \
    ./cordova/package.json \
    ./cordova/resources $1/cordova