window.Counter = function(value) {
	'use strict';
	var self = this;

	self.inc = function() {
		value += 1;
	};

	self.dec = function() {
		value--;
	};

	self.val = function() {
		return value;
	};

};
