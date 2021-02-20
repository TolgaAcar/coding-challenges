function sym(...args) {
	let arrays = args;
	while (arrays.length >= 2) {
		let symBetweenTwoArr = symBetweenTwo(arrays[0], arrays[1]);
		arrays.splice(0, 2);
		arrays.unshift(symBetweenTwoArr);
	}
	return arrays[0];
}

function symBetweenTwo(arr1, arr2) {
	let symArr = [];

	for (let i = 0; i < arr1.length; i++) {
		if (!arr2.includes(arr1[i]) && !symArr.includes(arr1[i])) {
			symArr.push(arr1[i]);
		}
	}

	for (let j = 0; j < arr2.length; j++) {
		if (!arr1.includes(arr2[j]) && !symArr.includes(arr2[j])) {
			symArr.push(arr2[j]);
		}
	}
	return symArr;
}
