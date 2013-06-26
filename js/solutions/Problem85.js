

function computeNumRectangles(width, height) {
	var h, w, count = 0;

	if (width === 0 || height === 0) {
		return 0;
	}

	if (width === height) {
		// we just added width
		for (h = height; h > 0; h--) {
			count += (h * width);
		}
		return count + computeNumRectangles(width-1, height);

	} else {
		// height is currently greater than width
		for (w = width; w > 0; w--) {
				count += (height * w);
		}
		return count + computeNumRectangles(width, height-1);
	}
}

exports.solve = function () {

	var numRectangles = -1, closest = 100000000, result;

	for (var h = 1; h <= 100; h++) {
		for (var w = 1; w <= 100; w++) {
			numRectangles = computeNumRectangles(w, h);
			console.log(w, h, numRectangles);
			if (Math.abs(numRectangles - 2000000) < Math.abs(closest - 2000000)) {
				closest = numRectangles;
				result = w * h;
			}
		}
	}

	return result;
}