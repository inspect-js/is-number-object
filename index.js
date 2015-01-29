'use strict';

var toStr = Number.prototype.toString;

module.exports = function isNumberObject(value) {
	if (typeof value === 'number') { return true; }
	if (typeof value !== 'object') { return false; }
	try {
		toStr.call(value);
		return true;
	} catch (e) {
		return false;
	}
};
