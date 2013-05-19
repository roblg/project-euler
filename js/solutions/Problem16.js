
function multiplyByTwo(digits) {
	var i, newVal, carry = 0;
	for (i = 0; i < digits.length; i++) {
		newVal = (digits[i] * 2) + carry;
		carry = Math.floor(newVal / 10);
		digits[i] = newVal % 10;
	}
	if (carry) {
		digits.push(carry);
	}
}

exports.solve = function () {

	// I think the moral of this solution should be that there
	// are some things Ruby/Python are way better at than JavaScript,
	// hence the reason I wrote my own arbitrary-precision multiply-by-two
	// routine...

	var i,
		digits = [2];

	// we've already added one of our 2s to the output list,
	// so we only need to multiply it 999 more times. 
	for (i = 0; i < 999; i++) {
		multiplyByTwo(digits);
	}

	return digits.reduce(function (prev, curr) { return prev + curr; });

}