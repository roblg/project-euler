
var BigInt = require("../BigInt");

var next_fib_bigint = (function () {

	var i = new BigInt(0),
		j = new BigInt(1);

	return function () {
		var t = j;
		j = i.add(j);
		i = t;
		return t;
	};

})();

exports.solve = function () {

	var i = 0,
		fibval;
	do {
		i += 1;
		fibval = next_fib_bigint();
	} while (fibval._digits.length < 1000);

	return i;
}