function getFinalOpenedDoors(numDoors) {
	const n = 100;
	let doorsArr = [];
	let result = [];

	for (let i = 0; i <= n; i++) {
		doorsArr[i] = -1;
	}

	for (let i = 1; i <= n; i++) {
		visitXDoors(i, doorsArr);
	}

	for (let i = 1; i <= n; i++) {
		if (doorsArr[i] > 0) {
			result.push(i);
		}
	}

	// console.log(doorsArr);
	// console.log(result);
	return result;
}

function toogleDoor(index, arr) {
	arr[index] = arr[index] * -1;
}

function visitXDoors(index, arr) {
	let counter = 1;
	let multipleCounter = index;

	while (multipleCounter < arr.length) {
		toogleDoor(multipleCounter, arr);
		counter++;
		multipleCounter = index * counter;
	}
}

//Test
getFinalOpenedDoors();
