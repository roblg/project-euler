
var chainLength = (function () {

	var cache = { 1: 1 };

	return function (n) {

		if (typeof cache[n] === 'undefined') {
			if (n % 2 === 0) {
				cache[n] = 1 + chainLength(n / 2);
			} else {
				cache[n] = 1 + chainLength(3 * n + 1);
			}
		}

		return cache[n];
	};

})();


exports.solve = function () {

	var longest = -1;
	var start = -1;

	for (i = 1; i < 1000000; i++) {
		length = chainLength(i);
		if (length > longest) {
			longest = length;
			start = i;
		}
	}

	return start;

}