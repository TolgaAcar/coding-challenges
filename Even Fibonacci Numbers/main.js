function fiboEvenSum(n) {
	let total = 2;
	let prevFiboNumber = 1;
	let currentFiboNumber = 2;
	let nextFiboNumber = 0;

	while (true) {
		nextFiboNumber = prevFiboNumber + currentFiboNumber;
		if (nextFiboNumber > n) break;
		prevFiboNumber = currentFiboNumber;
		currentFiboNumber = nextFiboNumber;

		if (currentFiboNumber % 2 == 0) {
			total = total + currentFiboNumber;
		}
	}

	return total;
}

// Test
fiboEvenSum(4000000);
