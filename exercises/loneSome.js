module.exports.run = function(a, b, c) {
/*
Given 3 int values, a b c, return their sum. However, if one of the values is the same as another of the values, it does not count towards the sum.

Examples:
	function(1, 2, 3) => 6
	function(3, 2, 3) => 2
	function(3, 3, 3) => 0

Write your code below the comment.

*/
	// If all nums are the same just return 0
	if (a === b && b === c) return 0;
	// If there are any pairs return the odd one out
	else if (a === b) return c;
	else if (b === c) return a;
	else if (a === c) return b;
	// If there are no pairs then return the sum
	else return a + b + c; 

	/*
		MAP SOLUTION: This map solution is the more general solution to this problem.
			This map solution can be easily rewritten to take in any size input like an array of numbers,
			while the above solution can not be easily rewritten to scale with the inputs.

		Time: O(1), space O(1) given only three arguments
		const count = {}
		count[a] = 1;
		count[b] ? count[b]++ : count[b] = 1;
		count[c] ? count[c]++ : count[c] = 1;

		let sum = 0;
		for (let key of Object.keys(count)) {
			if (count[key] === 1) sum += Number(key);
		}
		return sum;
	*/
};
