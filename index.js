'use strict';

var toStr = Number.prototype.toString;

module.exports = function isNumberObject(value) {
	try {
		toStr.call(value);
		return true;
	} catch (e) {
		return false;
	}
};
