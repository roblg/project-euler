
function reverse(n) {
	var result = 0;
	while (n > 0) {
		// this is weird, but works because result starts out as 0
		result *= 10; 
		result += (n % 10);
		n = Math.floor(n / 10);
	}

	return result;
}

function onlyOddDigits(n) {
	while (n > 0) {
		// if the number is even, the last digit must be even 
		if (n % 2 === 0) {
			return false;
		}
		n = Math.floor(n / 10);
	}
	return true;
}

function onlyOddDigits(n) {
	while (n > 0) {
		// if the number is even, the last digit must be even 
		if (n % 2 === 0) {
			return false;
		}
		n = Math.floor(n / 10);
	}
	return true;
}

exports.solve = function () {

	var target = Math.pow(10,9);

	var count = 0;
	// for (var i = 1; i < target; i+=2) {
	// 	if (onlyOddDigits(i)) {
	// 		onlyOdds[i] = true;
	// 	}
	// }

	var seen = {};
	var reversed;
	for (var i = 1; i < target; i++) {
		if (i % 10 === 0) continue; // skip things ending in 0
		if (seen[i]) { delete seen[i]; continue; }
		reversed = reverse(i);
		// console.log(i, reversed);
		// if (reversed < i) continue;

		if (onlyOddDigits(i + reversed)) {
			count += 2;
			console.log(i, count);
			seen[reversed] = true;
		}

	}

	

	return count;
}