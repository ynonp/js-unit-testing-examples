window.Counter = function(value) {
	'use strict';
	var self = this;

	self.inc = function() {
		value++;
	};

	self.dec = function() {
		value--;
	};

	self.val = function() {
		return value;
	};

};
