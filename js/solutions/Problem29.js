
exports.solve = function () {
	var BigInt = require("../BigInt");
	var uniqueCount = 0,
		seenCache = {},
		a, b;

	var tempResult, aBigInt;
	for (a = 2; a <= 100; a++) {
		aBigInt = new BigInt(a);
		tempResult = aBigInt;
		for (b = 2; b <= 100; b++) {
			tempResult = tempResult.multiply(aBigInt);
			if (!seenCache[tempResult]) {
				seenCache[tempResult] = true;
				uniqueCount++;
			}
		}
	}

	return uniqueCount;

}