
exports.solve = function () {
	
	var util = require("../util");
	var count = 0;

	// for each denominator, compute its divisors (ignoring 1). 
	// for each possible numerator that would make the resulting fraction
	// fall between 1/3 and 1/2, see if that numerator is divisible by a factor
	// of the denominator. If not, it must be reduced. 
	for (var d = 3; d <= 12000; d++) {
		console.log(d);
		var factors = util.getProperDivisors(d);
		factors.sort(function (a, b) { return a - b; });
		factors.shift(); // pop the 1 off the front, since that's not helpful
		var start_n = Math.floor(d / 3) + 1;

		for (var n = start_n; (n / d) < 0.5; n++) {
			if (factors.every(function (f) { return n % f !== 0; })) {
				// if n is divisible by some factor of d, then they're both divisible by that
				// by definition, and can't be in the most reduced form
				count += 1;
			}
		}
	}

	return count;
}