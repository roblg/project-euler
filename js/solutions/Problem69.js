

exports.solve = function () {
	var max_i, max_i_over_phi = 0,
		util = require("../util"),
		totient = util.makeCachingTotientFunction();

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