
function digitsTo5thPowerSum (n) {
	var sum = require("../util").sum,
		digits = extractDigits(n);
	return sum(digits.map(function (d) {
		return Math.pow(d, 5); 
	}));
}

function extractDigits(n) {
	var result = [];
	do {
		result.push(n % 10);
		n = Math.floor(n / 10);
	} while (n > 0);
	result.reverse();
	return result;
}

exports.solve = function () {
	// loop while i < 1,000,000, because the biggest sum for any 6-digit number is
	// 999,999 => 6 * 9^5 => 354294, so there might be *some* numbers in 100k-999,999
	// where their digits^5 add up to the number, but starting from 1M there can't be.
	// (max value at for 1M-9,999,999 = 9^5 * 7 = ~413k). There might be a tighter bound,
	// but this is easier.

	var solution = 0,
		i = 10, // start at 10
		digitSum;

	while (i < 1000000) {
		digitSum = digitsTo5thPowerSum(i);
		if (i === digitSum) {
			solution += i;
		}
		i++;
	}

	return solution;
}