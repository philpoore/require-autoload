'use strict';
/*
	Require Autoload

	Autoload a directory of files onto an object

	// use like so:
	module.exports = require('require-autoload')(__dirname);

*/


const fs = require('fs');
const path = require('path');
const debug = require('debug')('autoload');

const autoload = (dir) => {
	let obj = {};
	fs.readdirSync(dir).map((file) => {
		return file.match(/(.*)\.js$/i);
	}).map((js_file) => {
		if (js_file){
			debug(js_file);
			obj[js_file[1]] = require(dir + '/' + js_file[0]);	
		}
	});

	return obj;
}

module.exports = autoload;