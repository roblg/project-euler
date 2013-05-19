


exports.solve = function () {
	
	var util = require("../util"),
		nums = util.range(100, 1000).reverse(),
		max = -1;

	nums.forEach(function (i) {
		nums.forEach(function (j) {
			var product = i * j;
			if (util.isPalindrome('' + product) && product > max) {
				max = product;
			}
		});
	});
	
	return max;
}
