function pairwise(arr, arg) {
	results = []; // includes all the pairs
	usedIndexes = []; // store previously paired elements indexes
	sumOfIndexes = 0;
	n = arr.length;
	for (let i = 0; i < n; i++) {
		for (let j = 0; j < n; j++) {
			if (
				i !== j &&
				!usedIndexes.includes(i) &&
				!usedIndexes.includes(j)
			) {
				if (arr[i] + arr[j] === arg) {
					results.push({ first: arr[i], second: arr[j] });
					sumOfIndexes += i + j;
					usedIndexes.push(i);
					usedIndexes.push(j);
				}
			}
		}
	}
	return sumOfIndexes;
}

// Test
pairwise([1, 4, 2, 3, 0, 5], 7);
