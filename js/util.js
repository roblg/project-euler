
var fibIterator = exports.fibIterator = function () {
	var i = 1;
	var j = 1;
	return {
		next: function () {
			var t = j;
			j = i + j;
			i = t;
			return t;
		}
	}
}

var range = exports.range = function (a, b) {
	var arr = [];
	for (var i = a; i < b; i += 1) {
		arr.push(i);
	}
	return arr;
}

var primesUpTo = exports.primesUpTo = function (n, initialPrimes) {
	var p, candidates, result = [];
		
	if (initialPrimes) {
		// if we have an initial set of primes, use those as the first
		// part of the candidates
		candidates = initialPrimes.slice();
		for (var i = candidates[candidates.length - 1] + 1; i <= n; i++) {
			candidates.push(i);
		}
	} else {
		// if we aren't given initial primes, start with everything
		candidates = range(2, n + 1);
	}
	
	do {
		p = candidates.shift();
		result.push(p);
		
		candidates = candidates.filter(function (n) {
			return n % p !== 0;
		});
		
	} while (p < Math.sqrt(n));
	
	// Intriguingly, Array.prototype.push.apply blows up with
	// "RangeError: Maximum call stack size exceeded" trying to 
	// compute primes up to 2M. Array.concat does not. 
	// Array.prototype.push.apply(result, candidates);

	result = result.concat(candidates);
	
	return result;
}

var isPrime = exports.isPrime = (function () {

	var primes = [2];

	var isPrimeHelper = function (n) {

		// if n greater than maximum prime, let's compute some
		// more primes
		if (n > primes[primes.length - 1]) {

			// optimize for the fact that it's *probably not* prime.
			// check if it's divisible by any prime we have computed first
			var defNotPrime = primes.some(function (p) {
				return n % p === 0;
			});
			if (defNotPrime) {
				return false;
			}

			primes = primesUpTo( (2*n) + 1, primes);
		}

		isPrimeHelper.primes = primes;

		// TODO: binary search this
		return primes.indexOf(n) >= 0;
	}

	isPrimeHelper.primes = primes;
	return isPrimeHelper;

})();

var primeFactors = exports.primeFactors = function (n) {
	var primesToN = primesUpTo(Math.ceil(Math.sqrt(n))),
		primeFactors = [],
		remaining = n;
		
	primesToN.forEach(function (i) {
		while (remaining % i === 0) {
			primeFactors.push(i);
			remaining /= i;
		}
	});
	
	return primeFactors;
}

var sum = exports.sum = function () {
	var args;
	if (arguments.length === 1 && typeof arguments[0].length !== 'undefined') {
		// assume it's an array
		args = arguments[0].slice();
	} else {
		// assume we've received several parameters, and
		// we should sum all of them
		args = Array.prototype.slice.call(arguments);
	}
	
	return args.reduce(function (x, y) {
		return x + y;
	});
}

var isPalindrome = exports.isPalindrome = function (input /* String|Array */) {
	
	var i = 0,
		j = input.length - 1;
	
	while (i <= j && input[i] === input[j]) {
		i++;
		j--;
	}
	
	return i >= j;
}

var getDivisors = exports.getDivisors = function (n) {
	var d = getProperDivisors(n).slice();
	d.push(n);
	return d;
}

var getProperDivisors = exports.getProperDivisors = function (n) {
	var divisors = [1]; // we skip 'n' for proper divisors
	var squareRoot = Math.sqrt(n);
	for (var i = 2; i <= squareRoot; i++) {
		if (n % i === 0) {
			divisors.push(i);
			if (i !== n / i) {
				divisors.push(n / i);
			}
		}
	}
	return divisors;
}

var powModN = exports.powModN = function (base, exp, mod) {

	if (exp === 0) {
		return 1;
	}

	if (mod > 10000000000) {
		// too lazy to look up what the actual max is. I'll come back to it if
		// I need it. 
		throw 'Whoa there! JavaScript and Big Numbers overflow eventually';
	}

	var result = base % mod;
	exp--;
	while (exp > 0) {
		result = (result * base) % mod;
		exp--;
	}

	return result;
}

// brute force. compute all permutations at once. 
// TODO: make this more elegant (iterator)
var permutations = exports.permutations = function (arr) {

	var result = [];
	var helper = function (curr, remain) {
		if (remain.length === 0) {
			result.push(curr.slice()); // copy
			return;
		}

		var val;
		for (var i = 0; i < remain.length; i++) {
			curr.push(remain[i]);
			helper(curr, remain.slice(0, i).concat(remain.slice(i+1)));
			curr.pop();
		}

	}

	helper([], arr);

	return result;
}

var extractDigits = exports.extractDigits = function (n, doReverse) {
	var result = [];
	do {
		result.push(n % 10);
		n = Math.floor(n / 10);
	} while (n > 0);

	if (doReverse || typeof doReverse === 'undefined') {
		result.reverse();
	}
	return result;
}

var cornersOfSpiral = exports.cornersOfSpiral = function (sideLength) {
	if (sideLength === 1) {
		return [1];
	}

	var sideSquared = sideLength * sideLength;
	return [
		sideSquared, 
		sideSquared - (sideLength - 1),
		sideSquared - 2 * (sideLength - 1),
		sideSquared - 3 * (sideLength - 1)
	];
}

var gcd = exports.gcd = function (a, b) {
	while (a !== b) {
		if ( a < b) {
			b = b - a; 
		} else {
			a = a - b;
		}
	}
	return a;
}

var makeCachingTotientFunction = exports.makeCachingTotientFunction = function () {

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
}

// Another way to calculate totient. Can be generalized to create a totient sieve (Problem 70)
// function distinctPrimeFactors (n) {
// 	return primes.filter(function (f) { return n % f === 0; });
// }
// var primeFactors = util.primeFactors;
// var totient = function (n) {
// 	var pf = distinctPrimeFactors(n);
// 	var totientAcc = n;
// 	var curr, last;
// 	while (curr = pf.pop()) {
// 		if (curr === last) {
// 			continue;
// 		}
// 		last = curr;
// 		totientAcc *= (curr - 1) / curr;
// 	}
// 	return totientAcc;
// }
