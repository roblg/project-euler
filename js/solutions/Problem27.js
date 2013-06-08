
var numPrimes = (function () {
	var util = require("../util"),
		isPrime = util.isPrime;

	return function (a, b) {

		var val,
			n = 0;

		while (isPrime( Math.pow(n,2) + (a * n) + b )) {
			n++;
		}

		return n;
	};
})();

exports.solve = function () {
	var solA, solB, solLength = 0;

	var a,b, temp;
	for (a = -999; a < 999; a++) {
		for (b = -999; b < 999; b++) {
			temp = numPrimes(a, b);
			if (temp > solLength) {
				solLength = temp;
				solA = a;
				solB = b;
			}
		}
	}

	return solA * solB;
}