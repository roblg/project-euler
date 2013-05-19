


exports.solve = function () {
	
	var util = require("../util"),
		nums = util.range(100, 1000).reverse(),
		cache = {};

	// TODO: this algorithm doesn't work. 

	var i,j;
	for (i = 0; i < nums.length; i++) {
		for (j = 0; j < nums.length; j++) {
			if (util.isPalindrome('' + (nums[i] * nums[j]))) {
				return nums[i] * nums[j];
			}
		}
	}
	
	return false;
}
