
var nextTriangleNum = (function () {
	var nextAddend = 1;
	var current = 0;

	return function () {
		current = current + nextAddend;
		nextAddend += 1;
		return current;
	};

})();

exports.solve = function () {
	var getDivisors = require("../util").getDivisors,
		num, divisors;

	do {
		num = nextTriangleNum();
		divisors = getDivisors(num);
	} while (divisors.length <= 500);
	return num;
}