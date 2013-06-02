
function factorial(n) {
	if (n === 0) { 
		return 1; 
	}
	
	var ret = 1;
	do {
		ret *= n;
		n--;
	} while (n > 0);

	return ret;
}

exports.solve = function () {
	var factCache = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(function (n) {
		return factorial(n);
	});
	console.log(factCache);

	// we only have to handle numbers up to 8 digits, because 8*9! => 7 digits
	// so nothing larger than that can possibly have sum of digits = number

	var util = require("../util");

	var result = 0,
		sumOfDigits;
	for (var i = 3; i < 10000000; i++) {
		sumOfDigits = util.sum(util.extractDigits(i).map(function (d) {
			return factCache[d];
		}));
		if (sumOfDigits === i) {
			result += i;
		}
	}

	return result;
}