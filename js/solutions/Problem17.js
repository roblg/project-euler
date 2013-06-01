
var numberWords = {
	1: "one",
	2: "two",
	3: "three",
	4: "four",
	5: "five",
	6: "six",
	7: "seven",
	8: "eight",
	9: "nine",
	10: "ten",
	11: "eleven",
	12: "twelve",
	13: "thirteen",
	14: "fourteen",
	15: "fifteen",
	16: "sixteen",
	17: "seventeen",
	18: "eighteen",
	19: "nineteen",
	20: "twenty",
	30: "thirty",
	40: "forty",
	50: "fifty",
	60: "sixty",
	70: "seventy",
	80: "eighty",
	90: "ninety"
}

function numInEnglish(n) {

	var ones = n % 10;
	var tens = Math.floor( n / 10 ) % 10; // shift right one place, and mod 10 again
	var hundreds = Math.floor(n / 100) % 10; // could do '% 10', but it isn't necessary
	var thousands = Math.floor(n / 1000) % 10;

	var words = [];

	if (thousands > 0) {
		words.push(numberWords[thousands], "thousand");
	}

	// note: this hundreds computation only works for n < 1000
	if (hundreds > 0) {
		words.push(numberWords[hundreds], "hundred");

		if (tens > 0 || ones > 0) {
			words.push("and");
		}
	}

	if (tens > 1) { // skip the teens -- they're special

		words.push(numberWords[tens * 10]);

	} else if (tens === 1) {
		ones = 10 + ones;
		tens = 0;
	}

	// "ones" could be 0-19 here, and we've special cased all of those
	// we skip 0 ones, because those are special cased as well
	if (ones > 0) {
		words.push(numberWords[ones]);
	}

	return words.join(' ');
}

exports.solve = function () {

	var count = 0;

	for (var i = 0; i <= 1000; i++) {
		count += numInEnglish(i).replace(/ /g, "").length;
	}

	return count;

}