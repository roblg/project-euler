
var sumOfDivisors = function (n) {
	var util = require("../util");
	var divisors = util.getDivisors(n);
	// util.getDivisors doesn't include [1,n], so we'll add 1
	divisors.push(1);
	return util.sum.apply(null, divisors);
}


var isAmicable = function (a) {
	var b = sumOfDivisors(a);
	var sumOfDivisorsOfB = sumOfDivisors(b);

	return (a !== b) && (a === sumOfDivisorsOfB);
};

exports.solve = function () {
	var sumOfAmicable = 0;
	for (var i = 1; i < 10000; i++) {
		if (isAmicable(i)) {
			sumOfAmicable += i;
		}
	}
	return sumOfAmicable;
}