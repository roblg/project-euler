
function isPermutation(d1, d2) {
	if (d1.length !== d2.length) {
		return false;
	}
	d1 = [].concat(d1); d1.sort();
	d2 = [].concat(d2); d2.sort();

	for (var i = 0; i < d1.length; i++) {
		if (d1[i] !== d2[i]) { return false; }
	}

	return true;
}

exports.solve = function () {
	var util = require("../util"),
		extractDigits = util.extractDigits;

	var target = 10000000;

	var primes = util.primesUpTo(target);

	var totientSieve = util.range(0, target+1);
	primes.forEach(function (p) {
		for (var i = p; i < totientSieve.length; i+= p) {
			totientSieve[i] *= (p - 1) / p;
		}
	});

	var result = { n: null, totient: null, ratio: 100000000 };
	var tempRatio;
	for (var i = 2; i < totientSieve.length; i++) {
		if (isPermutation(extractDigits(i), extractDigits(totientSieve[i]))) {
			tempRatio = i / totientSieve[i];
			if (tempRatio < result.ratio) {
				result = { n: i, totient: totientSieve[i], ratio: tempRatio };
			}
		}
	}

	return result;
}