
exports.solve = function () {
	
	var util = require("../util"),
		range = [20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
		i = 20;
	
	while (true) {
		
		var allDivisible = range.every(function (j) {
			return i % j === 0;
		});
		
		if (allDivisible) {
			return i;
		}
		
		i += 20;
	}
	
	return -1;
}