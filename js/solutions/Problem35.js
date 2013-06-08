
function rotations(n) {
	var current = require("../util").extractDigits(n);
	var rots = [current.slice(0)];
	var i = 1;
	do {
		current.push(current[0]);
		current = current.slice(1);
		rots.push(current.slice(0));
		i++;
	} while (i < current.length);
	return rots;
}

exports.solve = function () {

	var util = require("../util"),
		primesUpTo1M = util.primesUpTo(1000000),
		isPrime = util.isPrime;

	// mmm... closure...
	function isCircularPrime(p /* prime number */) {
		var rots = rotations(p);
		return rots.every(function (digits) {
			// TODO: this will actually calculate every prime twice, because we've already calculated them once
			return isPrime(parseInt(digits.join(''),10));
		});
	}

	var circularPrimes = primesUpTo1M.filter(function (p) {
		return isCircularPrime(p);
	});

	return circularPrimes.length;
}