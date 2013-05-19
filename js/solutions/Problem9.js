
exports.solve = function () {

	var a, b, c;
	for (a = 1; a < 1000; a++) {
		for (b = 1000 - a; b > 0; b--) {
			c = 1000 - a - b;
			if (Math.pow(a, 2) + Math.pow(b, 2) === Math.pow(c, 2)) {
				return a * b * c;
			}
		}
	}

	return false;
}