
function isPrimeSlow(sideLength, n) {
	if (n % sideLength === 0 || n % 2 === 0) {
		// short-circuit
		return false;
	}

	for (var i = 3; i <= Math.sqrt(n); i++) {
		if (n % i === 0) { return false; }
	}

	return true;
}

exports.solve = function () {

	var util = require("../util"),
		cornersOfSpiral = util.cornersOfSpiral,
		sideLength = 3,
		numPrimes = 3,
		numsInDiagonal = 5;
	
	var corners;
	while (numPrimes / numsInDiagonal > .1) {
		sideLength += 2;
		numsInDiagonal += 4;
		corners = cornersOfSpiral(sideLength)
		// it's faster to use isPrimeSlow for this problem, because we're only testing the primality
		// of 
		numPrimes += corners.filter(function (c) { return isPrimeSlow(sideLength, c); }).length;
	}

	return sideLength;
}