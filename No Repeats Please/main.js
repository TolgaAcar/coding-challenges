let i = 0;
function permAlone(str) {
	findPermutaions("", str);
	return i;
}

// Recursively search all permutations of given string
// if the found permutation has no repeated consecutive letters increase i
function findPermutaions(prefix, str) {
	const n = str.length;
	if (n === 0) {
		if (!hasRepeatedConsecutiveLetters(prefix)) {
			i++;
		}
	} else {
		for (let i = 0; i < n; i++) {
			findPermutaions(
				prefix + str.charAt(i),
				str.substring(0, i) + str.substring(i + 1, n),
			);
		}
	}
}

// returns true if the given string has repeated consecutive letters
function hasRepeatedConsecutiveLetters(str) {
	for (let i = 0; i < str.length - 1; i++) {
		if (str.charAt(i) === str.charAt(i + 1)) {
			return true;
		}
	}
	return false;
}

// Test
console.log(permAlone("aabb"));
