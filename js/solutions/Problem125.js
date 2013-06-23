
// generate all palindromic numbers < 10^8? or all sequences first?

exports.solve = function () {

	var BigInt = require("../BigInt"),
		util = require("../util"),
		isPalindrome = util.isPalindrome;

	var target = Math.pow(10, 8);

	var sum, seen = {}, result = 0;

	for (var i = 1; i < Math.sqrt(target); i++) {
		sum = i * i;
		for (var j = i + 1; j < Math.sqrt(target); j++) {
			sum += (j * j);
			if (sum > target) {
				break;
			}
			if (!seen[sum] && isPalindrome('' + sum)) {
				result += sum;
				seen[sum] = true;
			}
		}
	}

	return result.toString();
}