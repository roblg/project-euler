
exports.solve = function () {
	// yes, I know sync read file is bad. but this whole solve thing is single-threaded
	var inputString = require("fs").readFileSync("inputs/Problem67.txt", {encoding: 'utf-8'});

	var lines = inputString.split(/\n/).filter(function (line) { return line != ''; });
	
	// split lines on whitespace so that we have the same format as the input
	// for Problem 18
	lines = lines.map(function (line) {
		return line.split(" ");
	});

	var Problem18 = require("./Problem18");
	var tree = Problem18.inputToTree(lines);
	return Problem18.maxPath(tree);

}
