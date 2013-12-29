#!/usr/bin/env node
/*
// A cordova hook that copies various resource files, mainly icons and splash screens, into the appropriate platform specific location
*/

// give the console some vibrant colors :)
var colors = require('colors');

/*
// This module adds a few extra file system methods that aren't included in the native fs module. 
// It is a drop in replacement for fs.
// npm install --save fs-extra
*/
var fs = require('fs-extra');

// Returns the current working directory of the process; console.log('Current directory: ' + process.cwd());
var rootDir = process.cwd();

//copies directory and subdirectories
fs.copy(rootDir + '/config/android/res', rootDir + '/platforms/android/res', function (err) {
    if (err) return console.error(err.red + ' An error occured! did you put your assets in; "config/android/res"?'.red);

    process.stdout.write('Resources successfully copied!'.green)
});