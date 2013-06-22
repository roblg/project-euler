
var digits = function (input /* [String|Number] */) {
	if (typeof input === 'string') {
		return input.split('').map(function (s) { return parseInt(s, 10); });
	} else if (typeof input === 'number') {
		var result = [];
		do {
			result.push(input % 10);
			input = Math.floor(input / 10);
		} while (input);
		return result.reverse();
	} else {
		throw 'input must be String or Number';
	}
}

var BigInt = function (input /* [Number|String|Array] */) {

	if (typeof input === 'string' || typeof input === 'number') {
		this._digits = digits(input);
		if (this._digits.length === 0) {
			this._digits.push(0);
		}
		// _digits are stored in reverse -- least significant place at 0 index
		this._digits.reverse();
	} else {
		// if the input is an array, it's assume to already be in least-significant-first order
		if (input.every(function (d) { return d === 0 })) {
			this._digits = [0];
		} else {
			this._digits = input;
		}
	}
}

/**
 * digits1 and digits2 are arrays of the digits of base-10 numbers,
 * least significant digit first
 */
 var digitAdd = function (digits1, digits2) {
	var temp, i = 0, carry = 0, result = [];
	do {
		temp = (digits1[i] || 0) + (digits2[i] || 0) + carry;
		carry = Math.floor(temp / 10);
		result.push(temp % 10);
		i += 1;
	} while (i < digits1.length || i < digits2.length);

	while (carry) {
		result.push(carry % 10);
		carry = Math.floor(carry / 10);
	}

	return result;
}

BigInt.prototype.add = function (other) {
	return new BigInt(digitAdd(this._digits, other._digits));
}

var digitMultiply = function (topDigits, bottomDigits) {
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
		resultDigits = digitAdd(resultDigits, intermediate);

	}

	return resultDigits;
}

BigInt.prototype.multiply = function (other) {
	var myDigits = this._digits;
	var otherDigits = other._digits;

	// the mutiplication algorithm in digitMultiply assumes that the first
	// parameter is the top (longer) number. 
	var myDigitsLonger = myDigits.length >= otherDigits.length,
		topDigits = myDigitsLonger ? myDigits : otherDigits,
		bottomDigits = myDigitsLonger ? otherDigits : myDigits;

	return new BigInt(digitMultiply(topDigits, bottomDigits));
}

BigInt.prototype.pow = function (exp) {
	if (exp === 0) {
		return new BigInt(1);
	} else if (exp === 1) {
		return this;
	}

	var resultDigits = this._digits;
	exp--;

	while (exp > 0) {
		resultDigits = digitMultiply(resultDigits, this._digits);	
	}

	return new BigInt(resultDigits);
}

BigInt.prototype.compareTo = function (other) {
	var d1 = this._digits;
	var d2 = other._digits;
	if ( (d1.length > 1 && d1[d1.length-1] === 0)
		|| (d2.length > 1 && d2[d2.length - 1] === 0) ) {
			throw "Can't have leading 0s";
	}

	if (d1.length !== d2.length) {
		return d1.length - d2.length;
	}
	// else, they must have equal digits!
	var i = d1.length - 1;

	while ( i >= 0 && d1[i] === d2[i]) { i--; }

	return i >= 0 ? d1[i] - d2[i] : 0;	
}

BigInt.prototype.toString = function () {
	var reversedDigits = this._digits.slice().reverse();
	return reversedDigits.join(''); // TODO: strip off leading 0s
}

module.exports = BigInt;

