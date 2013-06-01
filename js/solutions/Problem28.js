

var cornersOfSquare = function (sideLength) {
	if (sideLength === 1) {
		return [1];
	}

	var sideSquared = sideLength * sideLength;
	return [
		sideSquared, 
		sideSquared - (sideLength - 1),
		sideSquared - 2 * (sideLength - 1),
		sideSquared - 3 * (sideLength - 1)
	];
}

exports.solve = function () {
	var diagonals = [];
	for (var i = 1; i <= 1001; i += 2) {
		Array.prototype.push.apply(diagonals, cornersOfSquare(i));
	}
	return require("../util").sum.apply(null, diagonals);
}