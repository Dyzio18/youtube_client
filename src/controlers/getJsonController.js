import axios from 'axios';
import {jsonCodeView} from '../view/jsonView';


export let jsonRequest = () => {
	const resultElement = document.getElementById('json_res');
	resultElement.innerHTML = '';

	axios.get('https://www.googleapis.com/youtube/v3/channels?id=UCACp5rqV3Ki0SNdXWDBLhRA%20&key=AIzaSyDrlVfgXyOC7omkycJ7LMeyxMjEQERi2xA&part=contentDetails')
		.then(function (response) {
			jsonCodeView('json_res', response.data);
		})
		.catch(function (error) {
			resultElement.innerHTML = 'error' ;
		});
};

/* TODO
url must be variable
 */