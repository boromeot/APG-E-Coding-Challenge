module.exports.run = function(str) {
/*
A lowercase 'g' in a string is "happy" if there is another 'g' immediately to its left or right.
Return true if all the g's in the given string are happy, otherwise return false.

	Example:
		function("xxggxx") => true
		function("xxgxx") => false

        Write your code below the comment.
*/
	for (let i = 0; i < str.length; i++) {
		// Keep track of the characters to the LEFT and RIGHT of the current character
		const left = str[i - 1],
					current = str[i],
					right = str[i + 1];

		if (current === 'g') {
			// If the neither characters next to 'g' are also 'g' then just return false
			if (left !== 'g' && right !== 'g') return false;
		}
	}
	return true;
};
