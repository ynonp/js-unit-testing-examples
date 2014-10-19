/* global describe, it, Counter, expect, beforeEach */

(function () {
	'use strict';

	describe('Counter Tests', function () {
		describe('Counters work as expected', function () {
			var counter;

			beforeEach(function() {
				counter = new Counter(0);
			});

			it('should increase the value', function () {
				counter.inc();
				expect(counter.val()).to.eq(1);
			});

			it('should decrease the value', function() {
				counter.dec();
				expect(counter.val()).to.eq(-1);
			});

		});

	});
})();
