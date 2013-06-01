

function nameScore(name) {
	name = name.toUpperCase();
	var a = "A".charCodeAt(0);

	var sum = 0;
	for (var i = 0; i < name.length; i++) {
		sum += (name.charCodeAt(i) - a) + 1;
	}

	return sum;
}

exports.solve = function () {

	var fs = require('fs');

	var lines = fs.readFileSync('inputs/Problem22.txt', { encoding: 'utf-8'});
	names = lines.replace(/"/g, "").split(",");

	names.sort();

	// console.log(names.slice(0,20));

	return names.reduce(function (prev, curr, idx) {
		return prev + (nameScore(curr) * (idx + 1));
	}, 0 /* initial */);

}