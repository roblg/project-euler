
var daysInMonth = function (m /* 1-12 */, year) {
	if ([4,6,9,11].indexOf(m) > -1) {
		return 30; // September, April, June, November
	} else if (m !== 2) {
		// not Feb. ?
		return 31;
	} else {
		// Feb. depends on leap year
		if (year % 4 === 0 
				&& (year % 100 !== 0 || (year % 100 === 0 && year % 400 === 0))) {
			return 29;
		} else {
			return 28;
		}
	}
}

exports.solve = function () {

	var year = 1900;
	var month = 1;
	var dayOfWeek = 1; // monday (Sunday is 0)

	// algorithm: compute the next 1st of the month by adding the number
	// of days in the current month, and figure out which day of the week it would be

	var sundayCount = 0;

	while (year < 2001) {

		if (dayOfWeek === 0 && year > 1900) { // we need to start in 1901
			sundayCount += 1;
		}

		dayOfWeek = (dayOfWeek + daysInMonth(month, year)) % 7;
		month = (month % 12) + 1; // this looks funny, but it works. we need a 1-indexed month
		if (month === 1) {
			// we've wrapped, so up the year
			year += 1;
		}

	}

	return sundayCount;
	
}