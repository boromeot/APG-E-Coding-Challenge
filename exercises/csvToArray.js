const { result } = require("lodash");

module.exports.run = function(csv){
/*
	A stringified CSV file will be passed into this function.
	Parse the string so it is an array of objects and return the array.
	The object properties are the header of the csv file, and the very first row of the csv file are the headers.

	Example

	function ('FirstName,LastName,Age\nDan,Tran,29\nDon,Tran,25\nJasmine,Tran,13') =>
		[
			{FirstName: Dan, LastName: Tran, Age: 29},
			{FirstName: Don, LastName: Tran, Age: 25},
			{FirstName: Jasmine, LastName: Tran, Age: 13},
		]

	Write your code below the comment.
*/
		// Get every line / row from the CSV
		const lines = csv.split('/n');

		// Check if CSV has enough lines
		if (lines.length < 2) {
			throw new Error('Invalid CSV format. Must contain at least two lines.')
		}

		// Extract the headers from the first line
		const headers = lines.shift().split(',');

		// Map the remaining lines to their coresponding header
		const result = lines.map(line => {
			const values = line.split(',');
			
			// Check if CSV is well formatted
			if (headers.length !== values.length) {
				throw new Error('Invalid CSV format. Inconsistant number of columns');
			}

			const obj = {};
			for (let i = 0; i < headers.length; i++) {
				obj[headers[i]] = values[i];
			}
			return obj;
		});

		return result;
	};
