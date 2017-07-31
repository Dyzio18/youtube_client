import axios from 'axios';
import {jsonCodeView} from '../view/jsonView';

/*
 * sendRequest() send URL request and return response to .... jsonCodeView()
 * @param {string} idSection
 * @param {string} url
 */
export let sendRequest = (idSection, url) => {
	const resultElement = document.getElementById(`${idSection}__result`);
	resultElement.innerHTML = '';
	axios.get(url)
		.then(function (response) {
			jsonCodeView(`${idSection}__result`, response.data);
		})
		.catch(function (error) {
			resultElement.innerHTML = error ;
		});
};

/* TODO
 * url must be variable
 * https://www.googleapis.com/youtube/v3/channels?id=UCACp5rqV3Ki0SNdXWDBLhRA%20&key=AIzaSyDrlVfgXyOC7omkycJ7LMeyxMjEQERi2xA&part=contentDetails
 */