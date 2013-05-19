
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
	for (i = a; i < b; i += 1) {
		arr.push(i);
	}
	return arr;
}

var primesUpTo = exports.primesUpTo = function (n) {
	var result = [],
		candidates = range(2, n+1),
		p;
	
	do {
		p = candidates.shift();
		result.push(p);
		
		candidates = candidates.filter(function (n) {
			return n % p !== 0;
		});
		
	} while (p < Math.sqrt(n));
	
	Array.prototype.push.apply(result, candidates);
	
	return result;
}

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
	var args = Array.prototype.slice.call(arguments);
	return args.reduce(function (x, y) {
		return x + y;
	});
}

var isPalindrome = exports.isPalindrome = function (str) {
	
	var i = 0,
		j = str.length - 1;
	
	while (i <= j && str[i] === str[j]) {
		i++;
		j--;
	}
	
	return i >= j;
}
