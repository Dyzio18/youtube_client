import {sendRequest} from '../service/requestServices';
import {configYoutube} from '../../config/config.youtube';
import {getVideoId} from "./videoController";

/**
 * function is responsible for send request and return object with all comments data
 * function get normal youtube video URL (e.g. https://www.youtube.com/watch?v=8YFo7-63X7w)
 * @param {string} url
 * @return {object}
 */
export function getCommentsData(url) {
    try {
        const parseUrl = generateCommentsUrl(url);
        return sendRequest(parseUrl).then((response, error) => {
            const commentData = [];
            response.items.forEach((elem) => {
                const comment = {
                    authorDisplayName: elem.snippet.topLevelComment.snippet.authorDisplayName,
                    authorProfileImageUrl: elem.snippet.topLevelComment.snippet.authorProfileImageUrl,
                    authorChannelUrl: elem.snippet.topLevelComment.snippet.authorChannelUrl,
                    textDisplay: elem.snippet.topLevelComment.snippet.textDisplay,
                    textOriginal: elem.snippet.topLevelComment.snippet.textOriginal,
                    likeCount: elem.snippet.topLevelComment.snippet.likeCount,
                    publishedAt: elem.snippet.topLevelComment.snippet.publishedAt,
                    updatedAt: elem.snippet.topLevelComment.snippet.updatedAt,
                    totalReplyCount: elem.snippet.totalReplyCount
                };
                commentData.push(comment);
            });
            return commentData;
        }).catch(err => {
            return err;
        })
    } catch(error){
        return {error};
    }
}

/**
 * render video url and convert to api url request
 * @param {string} url
 * @return {string} parseUrl
 */
const generateCommentsUrl = (url) => `https://www.googleapis.com/youtube/v3/commentThreads?key=${configYoutube.userKey}&textFormat=plainText&order=relevance&part=snippet&videoId=${getVideoId(url)}`;

