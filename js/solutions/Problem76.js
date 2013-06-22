
function numWays(toMake, start) {

	if (toMake === 0) {
		return 1;
	}

	var count = 0;

	var i = start;
	while (i > 0) {
		var rem = toMake - i;

		if (rem >= 0) {
			count += numWays(rem, i);
		}

		i--;
	}

	return count;
}

// idea: treat it like making $1 out of coins with sizes from $0.01-$0.99.
// be greedy to avoid double-counting. 
exports.solve = function () {
	return numWays(100,99);
}