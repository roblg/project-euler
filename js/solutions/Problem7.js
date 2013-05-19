

exports.solve = function () {

	var util = require("../util"),
		primes = util.primesUpTo(1000);

	while (primes.length < 10000) {
		primes = util.primesUpTo(primes[primes.length-1] * 10, primes);
	}

	return primes[10000];
}
