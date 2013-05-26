

exports.solve = function () {

	// I think the moral of this solution should be that there
	// are some things Ruby/Python are way better at than JavaScript,
	// hence the reason I wrote my own arbitrary-precision BigInt class...

	var BigInt = require("../BigInt");

	var i,
		result = new BigInt(2);

	// we've already added one of our 2s to the output list,
	// so we only need to multiply it 999 more times. 
	for (i = 0; i < 999; i++) {
		result = result.multiply(new BigInt(2));
	}

	return result._digits.reduce(function (prev, curr) { return prev + curr; });

}