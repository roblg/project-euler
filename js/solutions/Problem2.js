
exports.solve = function () {
	
	var
		v,
		sum = 0,
		util = require("../util"),
		it = util.fibIterator();
	
	do {
		v = it.next();
		if (v % 2 === 0) {
			sum += v;
		}
	} while (v < 4000000);	
	
	return sum;
	
};


