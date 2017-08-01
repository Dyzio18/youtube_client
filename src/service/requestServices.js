import axios from 'axios';

/*
 * sendRequest() send URL request and return response to .... jsonCodeView()
 * @param {string} idSection
 * @param {string} url
 */
export const sendRequest = (url) => {

	return axios.get(url)
		.then(function (response) {
			return response.data ;
		})
		.catch(function (error) {
			console.log( error ) ;
		});
};

/* TODO
 * url must be variable
 * https://www.googleapis.com/youtube/v3/channels?id=UCACp5rqV3Ki0SNdXWDBLhRA%20&key=AIzaSyDrlVfgXyOC7omkycJ7LMeyxMjEQERi2xA&part=contentDetails
 */