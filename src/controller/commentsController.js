import {sendRequest} from '../service/requestServices';
import {jsonCodeView} from '../view/jsonView';
import {getVideoID} from './videoController';

const USER_KEY = 'AIzaSyDrlVfgXyOC7omkycJ7LMeyxMjEQERi2xA';

/**
 * watching changes in view - search
 * @param {string} idSection
 */
export const commentsController = (idSection) => {
    document.getElementById(`${idSection}__btn`).onclick = () => {
        let urlValue = document.getElementById(`${idSection}__btn`).value;
        let url = `https://www.googleapis.com/youtube/v3/commentThreads?key=AIzaSyDrlVfgXyOC7omkycJ7LMeyxMjEQERi2xA&textFormat=plainText&part=snippet&videoId=${getVideoID('https://www.youtube.com/watch?v=PDJPpG8e4n4')}&maxResults=5`;

        sendRequest(url).then(response => jsonCodeView(`${idSection}__comments`, response));
    };
};