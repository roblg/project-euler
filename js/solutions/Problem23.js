
function isAbundant(n) {
	var util = require("../util"),
		getProperDivisors = util.getProperDivisors,
		sum = util.sum;

	return sum(getProperDivisors(n)) > n;
}

exports.solve = function () {

	var abundants = [];
	for (var i = 1; i <= 28123; i++) {
		if (isAbundant(i)) {
			abundants.push(i);
		}
	}

	var expressableByTwoAbundants = {};
	abundants.forEach(function (i) {
		abundants.forEach(function (j) {
			// could check here, but it's easier just to overwrite
			expressableByTwoAbundants[i + j] = true;
		});
	});

	var sumOfNonExpressables = 0;
	for (var i = 1; i <= 28123; i++) {
		if (!expressableByTwoAbundants[i]) {
			sumOfNonExpressables += i;
		}
	}

	return sumOfNonExpressables;
}