
var totient = (function () {
	var util = require("../util"),
		gcd = util.gcd,
		getDivisors = util.getDivisors;

	var totientCache = {};

	return function (n) {
		var divs = getDivisors(n);

		if (divs.length === 2) {
			// prime: only divisible by 1 and itself. 
			// phi(n) = n-1
			totientCache[n] = n-1;
			return n-1;
		}

		divs.sort(function (a, b) { return a - b; });

		var prev;

		// walk out from the center of the divisors array, looking for a pair that
		// are relatively prime, and favoring those that are closer to the same value
		// note: 1, <n> are the first and last elements in the array, so we need to ignore those	

		var j = Math.floor( (divs.length + 1) / 2 ) ; // right of center in an even list
		var i = Math.floor( (divs.length / 2 ) ) - 1 ;
		while (i >= 1) {
			if (gcd(divs[i], divs[j]) === 1) {
				prev = divs[i];
				break;
			}
			i--; j++;
		}

		if (prev) {
			// this only works if n/prev, prev have gcd(prev, n/prev) === 1
			result = totientCache[n] = totientCache[prev] * totientCache[n / prev];
		} else {
			result = 1;
			for (var i = 2; i < n; i++) {
				if (gcd(i,n) === 1) {
					result += 1;
				}
			}
			totientCache[n] = result;
		}

		return result;

	}
})();

exports.solve = function () {
	var max_i, max_i_over_phi = 0;
	
	var t;
	for (var i = 2; i <= 1000000; i++) {
		t = totient(i);
		// console.log(i, t);
		if ( (i/t) > max_i_over_phi) {
			max_i_over_phi = i/t;
			max_i = i;
		}
	}

	return max_i;
}