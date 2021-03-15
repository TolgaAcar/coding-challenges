function largestPrimeFactor(number) {
	let largestPrime = 2;
	let i = 2;

	while (i <= number) {
		if (number % i === 0) {
			largestPrime = i;
			number = number / i;
		} else {
			i++;
		}
	}

	return largestPrime;
}

//largestPrimeFactor(13195);
