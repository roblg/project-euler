

exports.solve = function () {
	var util = require("../util"),
		input = 600851475143,
		factors = util.primeFactors(input);
	
	return factors[factors.length - 1];
}
