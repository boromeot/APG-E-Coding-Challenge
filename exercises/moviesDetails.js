module.exports.run = async function(movies) {
/*
	You are given a list of urls that will be used to search up movies.
	Make a GET call with axios using the given urls to search each movies.
	Then return an array of objects with the properties 'Title, Year, Genre' of each movie in the same order it came in as.

	You are welcome to change this function to an async/await.

	Example:

	function (['https://www.omdbapi.com/?t=Lion%20King', 'https://www.omdbapi.com/?t=Up']) =>
	[
		{Title: 'The Lion King', Year: '1994', Genre: 'Animation, Adventure, Drama, Family, Musical'},
		{Title: 'Up', Year: '2009', Genre: 'Animation, Adventure, Comedy, Family'},
	]

	Write your code below the comment.
*/
	const axios = require('axios');

	try {
		// Get and store all the reponses
		const reponses = await Promise.all(
			movies.map(url => {
				return axios.get(url);
			})
		);

		// Map and return the required details
		return reponses.map(response => {

			// Check if response has required data
			if (!response.data || !response.data.Title || !response.data.Year || !response.data.Genre) {
				throw new Error('Invalid response format. Missing required data');
			}

			// Uses object destructuring
			const moviesDetails = {
				Title,
				Year,
				Genre,
			} = response.data;
			return moviesDetails;
		});
	} catch (error) {
		throw error;
	}
};
