'use strict';

var toStr = Number.prototype.toString;
var tryNumberObject = function tryNumberObject(value) {
	try {
		toStr.call(value);
		return true;
	} catch (e) {
		return false;
	}
};

module.exports = function isNumberObject(value) {
	if (typeof value === 'number') { return true; }
	if (typeof value !== 'object') { return false; }
	return tryNumberObject(value);
};
