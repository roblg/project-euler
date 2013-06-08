
exports.solve = function () {
	var cornersOfSpiral = require("../util").cornersOfSpiral,
		diagonals = [];

	for (var i = 1; i <= 1001; i += 2) {
		Array.prototype.push.apply(diagonals, cornersOfSpiral(i));
	}
	return require("../util").sum.apply(null, diagonals);
}