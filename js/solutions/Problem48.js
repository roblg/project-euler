
exports.solve = function () {
	var powModN = require("../util").powModN;
	
	var result = 0,
		m = 10000000000;
	for (var i = 1; i <= 1000; i++) {
		result = (result + powModN(i, i, m)) % m;
	}

	return result;
}