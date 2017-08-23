import axios from 'axios';

/*
 * sendRequest() send URL request and return response from Youtube API
 * @param {string} url
 * @return {JSON} response.data
 */
export const sendRequest = (url) => {
	return new Promise((resolve, reject) => {
		axios.get(url)
			.then(function (response) {
				resolve(response.data);
			})
			.catch(function (error) {
				reject(error);
			});
	});
};

