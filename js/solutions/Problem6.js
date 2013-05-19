
exports.solve = function () {
	var util = require("../util"),
		nums = util.range(1, 101),
		squareOfSums = Math.pow(util.sum.apply(null, nums), 2),
		sumOfSquares = util.sum.apply(null, nums.map(function (i) {
			return Math.pow(i, 2);
		}));
	
	return Math.abs(sumOfSquares - squareOfSums);
}