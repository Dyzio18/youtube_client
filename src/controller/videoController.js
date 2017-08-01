import {sendRequest} from '../service/requestServices';
import {jsonCodeView} from '../view/jsonView';

const USER_KEY = 'AIzaSyDrlVfgXyOC7omkycJ7LMeyxMjEQERi2xA';

/**
 * watching changes in view - search
 * @param {string} idSection
 */
export const videoController = (idSection) => {
	document.getElementById(`${idSection}__btn`).onclick = () => {
		let urlValue = document.getElementById(`${idSection}__search`).value;
		let url = `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${getVideoID(urlValue)}&key=${USER_KEY}`;

		sendRequest(url).then(response => jsonCodeView(`${idSection}__result`, response));
	};
};

/**
 * get video id from url
 * @param {string} url
 * @returns {string} idVideo
 */
export const getVideoID = (url) => {
	let idVideo = url.match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/);
	if (idVideo != null) {
		return idVideo[1];
	} else {
		console.error('Wrong URL');
		return 0;
	}
};


/* TODO
-   Send data to controller
-   Controller render data
-   View not render data, view must only send data to controller
-   Make good idea about api structure {!!!}
	// youtube/v3/channels?id=${urlValue}%20&key=AIzaSyDrlVfgXyOC7omkycJ7LMeyxMjEQERi2xA&part=contentDetails`;
 */