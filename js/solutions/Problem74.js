
// factorial cache
// 0=>1, 1=>1, 2=>2, 3=>6, etc.
var factCache = [1];
for (var i = 1; i < 10; i++) {
	factCache[i] = i * factCache[i-1];
}

exports.solve = function () {
	
	var util = require("../util");

	// TODO: there's probably a more elegant way to go about this,
	// but brute-force is just barely fast enough. 

	var count = 0;
	var chain, digits, temp;
	for (var i = 1; i < 1000000; i++) {
		console.log(i);
		chain = [i];
		temp = i;
		while (true) {
			digits = util.extractDigits(temp);
			temp = util.sum( digits.map(function (d) { return factCache[d]; }) );
			if (chain.indexOf(temp) === -1) {
				chain.push(temp);
				if (chain.length === 61) {
					break;
				}
			} else {
				break;
			}
		}

		if (chain.length === 60) {
			count += 1;
		}
	}

	return count;
}