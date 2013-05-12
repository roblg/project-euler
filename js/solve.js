
var args = process.argv.slice(2),
	solver;

if (args.length === 0) {
	console.error("Missing required argument filename");
	process.exit(1);
}

solver = require('./solutions/' + args[0]);
console.log("Solution: ", solver.solve());
