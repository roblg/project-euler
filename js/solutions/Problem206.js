
// computer the digitNum-th digit of the square of digits (which
// are in reverse order -- least significant first)
function computeDigit(digits, digitNum) {
	if (digitNum === (2 * digits.length - 1)) {
		return 0; /* this one will always be add carry */
	}
	var startIdx = digitNum < digits.length ? digitNum : digits.length - 1;
	var endIdx = digitNum < digits.length ? 0 : digitNum - (digits.length - 1);

	var i = endIdx, j = startIdx, sum = 0;
	while (true) {
		if (j < i) {
			// they passed each other
			break;
		} else if (j === i) {
			sum += (digits[i]*digits[j]);
			break;
		} else {
			sum += 2 * (digits[i] * digits[j]);
		}
		i++; j--;
	}

	return sum;
}

exports.solve = function () {

	var desired = "0-9-8-7-6-5-4-3-2-1".split('').map(function (s) { return s === '-' ? null : parseInt(s); });
	var low = 1010101010; // 1000000000
	var high = 1389026624; // experimental upper bound
	var extractDigits = require("../util").extractDigits;

	var temp, digits;
	for (var n = low; n<= high; n+=10) {

		// if (n % 10000000) { console.log(n); }

		digits = extractDigits(n, false); // leave digits in reverse order

		var d, carry = 0, found = true;
		for (var i = 0; i < 20; i++) {
			d = computeDigit(digits, i) + carry;
			// temp.push(d % 10);
			if (desired[i] != null && d % 10 !== desired[i]) {
				found = false;
				break; // this loop - we don't have 
			}
			// console.log(d % 10);
			carry = Math.floor(d / 10);
		}
		if (i > 12) {
			console.log(i);
		}

		if (found && carry === 0) {
			return n;
		}


	}
	
	return "Unknown"
}