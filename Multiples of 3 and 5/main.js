function multiplesOf3and5(number) {
	let total = 0;

	for (let i = 0; i < number; i++) {
		if (i % 3 === 0) {
			total = total + i;
		} else if (i % 5 === 0) {
			total = total + i;
		}
	}
	return total;
}

multiplesOf3and5(49);
