
exports.solve = function () {

	var util = require("../util"),
		primesTo2M = util.primesUpTo(2000000);

	return primesTo2M.reduce(function (prev, curr, idx, arr) {
		return prev + curr;
	});

}