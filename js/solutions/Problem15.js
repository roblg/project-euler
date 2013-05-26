
var getCache = function (size) {
	size = size + 1; // for a grid of 2x2, we need a cache of 3x3

	var result = [], i, j;
	for (i = 0; i < size; i++) {
		result.push([]);
		for (j = 0; j < size; j++) {
			result[i].push(null); // empty, for now 
		}
	}
	return result;
}

var numPaths = function (cache, i, j) {

	if (cache[i][j] === null) {

		if (i === cache.length - 1 && j === cache[i].length - 1) {
			// if we're in the last cell, we'll just say there are 0 paths
			return 1;
		}

		var pathsDown = (i < cache.length - 1) ? numPaths(cache, i+1, j) : 0;
		var pathsRight =  (j < cache[i].length - 1) ? numPaths(cache, i, j+1) : 0;

		cache[i][j] = pathsDown + pathsRight;

	}

	return cache[i][j];
}

exports.solve = function () {
	return numPaths(getCache(20), 0, 0);
}