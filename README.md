# Hesperian Mobile Application Library

A library for building mobile applications using [Cordova/Phonegap](https://cordova.apache.org/)

## Overview

https://framework7.io/
https://v3.framework7.io/

Let's start by getting a hello world building, and working through keysign isssues.


https://cordova.apache.org/docs/en/latest/guide/cli/index.html

* npm install -g cordova
* sudo gem install cocoapods
* pod setup
* brew update
* brew upgrade node
* brew install gradle
* brew install rvm

export PATH=/Users/$USER/Library/Android/sdk/tools:$PATH
export PATH=/Users/$USER/Library/Android/sdk/tools/bin:$PATH
export PATH=/Users/$USER/Library/Android/sdk/platform-tools:$PATH


cd hello
cordova requirements
cordova compile
cordova run --list

https://stackoverflow.com/questions/24061063/how-can-i-deploy-create-ipa-iphone-app-using-cordova-build-ios-release

https://stackoverflow.com/questions/53741258/validate-ipa-before-upload


export CORDOVA_SIGNING_PASSPHRASE=

## Device Support

https://en.wikipedia.org/wiki/Android_version_history


* webpack.config 'browsers': ['iOS >= 9', 'Android >= 4.4']
* <preference name="android-minSdkVersion" value="19" />  <!-- Android 4.4 -->
* <preference name="android-targetSdkVersion" value="28"/>  <!-- Android 9.0 -->
* <preference name="deployment-target" value="9.0"/>  <!-- iOS 9.0 -->

## Framework7 V4

https://blog.framework7.io/the-best-framework7-yet-what-is-new-in-v4-74b2b467047c

 No IE and Android <5

 5% ish Android users <5 June 2019
