
exports.solve = function () {
	
	var util = require("../util");
	var totient = util.makeCachingTotientFunction();

	var count = 0;

	for (var d = 2; d <= 1000000; d++) {
		count += totient(d);
	}

	return count;
}
