

exports.solve = function () {

	var permutations = require("../util").permutations([0,1,2,3,4,5,6,7,8,9]);

	var permAsNumbers = permutations.map(function (perm) {
		return parseInt(perm.join(''), 10);
	});

	permAsNumbers.sort(function (a,b) {
		return a - b;
	});

	return permAsNumbers[999999];
}