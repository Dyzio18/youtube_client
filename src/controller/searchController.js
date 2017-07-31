import {sendRequest} from '../service/requestServices';

export const searchController = () => {
    console.log("searchController");
	document.getElementById('channel__btn').onclick = () => {
        /*let idChannel = document.getElementById('channel__btn').value;
        let didChannel = 'UC8uYStXS2ElBFLZVfuYzIxg';*/

        let idChannel = document.getElementById('channel__search').value;



        console.log(idChannel);
        console.log("CLICK");
		let url = `https://www.googleapis.com/youtube/v3/channels?id=${idChannel}%20&key=AIzaSyDrlVfgXyOC7omkycJ7LMeyxMjEQERi2xA&part=contentDetails`;
		sendRequest('channel',  url );
	};
};

/* TODO
-   Send data to controller
-   Controller render data
-   View not render data, view must only send data to controller
-   Make good idea about api structure {!!!}
 */