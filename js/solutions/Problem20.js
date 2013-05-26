
exports.solve = function () {
	var BigInt = require('../BigInt');

	var i, result = new BigInt(1);
	for (i = 2; i <= 100; i++) {
		result = result.multiply(new BigInt(i));
	}

	var resultDigits = result._digits; // TODO: don't reach in like this
	return resultDigits.reduce(function (prev, curr) {
		return prev + curr;
	});

}
