
var digits = function (str) {
	return str.split('').map(function (s) { return parseInt(s, 10); });
}

/**
 * digits1 and digits2 are arrays of the digits of base-10 numbers,
 * least significant digit first
 */
var addDigits = function (digits1, digits2) {
	var temp, i = 0, carry = 0, result = [];
	do {
		temp = (digits1[i] || 0) + (digits2[i] || 0) + carry;
		carry = Math.floor(temp / 10);
		result.push(temp % 10);
		i += 1;
	} while (i < digits1.length1 || i < digits2.length);

	while (carry) {
		result.push(carry % 10);
		carry = Math.floor(carry / 10);
	}

	return result;
}

var doMultiply = function (topDigits, bottomDigits) {
	var resultDigits = [0];

	var i, j, k, intermediate, carry;

	// for each digit of the number *on bottom* in a traditional
	// multiplication, we need to multiply it by every number in the top
	// row, and resolve carries
	for (j = 0; j < bottomDigits.length; j++) {
		i = 0;
		carry = 0;
		intermediate = [];

		for (k = j; k > 0; k--) {
			// we need to shift over by 10 for every digit we've moved
			// over in the bottom row
			intermediate.push(0);
		}

		// for each digit in the top row, perform the multiplication
		// and add in the carry value and add a result digit to intermediate
		// output
		do {
			temp = (topDigits[i] * bottomDigits[j]) + carry;
			carry = Math.floor(temp / 10);
			intermediate.push(temp % 10);
			i += 1;
			// console.log(temp, carry, intermediate);
		} while (i < topDigits.length);

		// if we've run out of the digits in the top row, and we still
		// have values to add, add them
		// (note: we could probably do this by converting to a string, splitting,
		// and then just using Array.apply() on the intermediate values)
		while (carry) {
			intermediate.push(carry % 10);
			carry = Math.floor(carry / 10);
		}

		// add this bottom-row digit's contribution to the total
		resultDigits = addDigits(resultDigits, intermediate);

	}

	return resultDigits;
}

// TODO: factor this out into a usable BitInt class
var multiply = function (numStr1, numStr2) {
	// TODO: it's super lazy/inefficient of me to convert numbers to strings to make the
	// code after this simpler, but I don't feel like fixing it right now.
	if (typeof numStr1 === 'number') numStr1 = String(numStr1);
	if (typeof numStr2 === 'number') numStr2 = String(numStr2);

	var topNum, bottomNum;

	if (numStr1.length >= numStr2.length) {
		topNum = digits(numStr1).reverse(); // TODO: not sure this is portable
		bottomNum = digits(numStr2).reverse();
	} else {
		bottomNum = digits(numStr1).reverse(); // TODO: not sure this is portable
		topNum = digits(numStr2).reverse();
	}

	return doMultiply(topNum, bottomNum).reverse().join('');
}

exports.solve = function () {

	var i, result = 1;
	for (i = 2; i <= 100; i++) {
		result = multiply(result, i);
	}

	var resultDigits = digits(result);
	return resultDigits.reduce(function (prev, curr) {
		return prev + curr;
	});

}
