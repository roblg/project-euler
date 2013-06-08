
function base2Digits(n) {
	var digits = [];

	while (n > 0) {
		digits.push(n % 2);
		n = Math.floor(n / 2);
	}

	digits.reverse();
	return digits;
}

exports.solve = function () {
	var isPalindrome = require("../util").isPalindrome;

	var sumOfPalindromes = 0;
	for (var i = 1; i < 1000000; i++) {
		if (isPalindrome(String(i)) && isPalindrome(base2Digits(i).join(''))) {
			sumOfPalindromes += i;
		}
	}

	return sumOfPalindromes;
}