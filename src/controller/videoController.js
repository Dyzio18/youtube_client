import {sendRequest} from '../service/requestServices';

const USER_KEY = 'AIzaSyDrlVfgXyOC7omkycJ7LMeyxMjEQERi2xA';
/**
 * watching changes in view - search
 * @param {string} idSection
 */
export const videoController = (idSection) => {
	document.getElementById(`${idSection}__btn`).onclick = () => {

		let urlValue = document.getElementById(`${idSection}__search`).value;
		/* 	let commentsCheckbox = document.getElementById(`${idSection}__checkbox--comments`).checked;
			let orderCheckbox = true; // date - popularity */
		let url = `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${renderURL(urlValue)}&key=${USER_KEY}`;

		sendRequest(idSection,  url );
	};
};

/**
 * get video id from url
 * @param {string} url
 * @returns {string} idVideo
 */
const renderURL = (url) => {
	let idVideo = url.match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/);
	if(idVideo != null) {
		// console.log('video id = ',idVideo[1]);
		return idVideo[1];
	} else {
		/* TODO
        	exception
        	catch error,
         */
	}
};



/* TODO
-   Send data to controller
-   Controller render data
-   View not render data, view must only send data to controller
-   Make good idea about api structure {!!!}
	// youtube/v3/channels?id=${urlValue}%20&key=AIzaSyDrlVfgXyOC7omkycJ7LMeyxMjEQERi2xA&part=contentDetails`;
 */