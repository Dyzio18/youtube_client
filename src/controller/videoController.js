import {sendRequest} from '../service/requestServices';
import {configYoutube} from '../../config/config.youtube';

/**
 * function is responsible for send request and return object with all video data
 * function get normal youtube video URL (e.g. https://www.youtube.com/watch?v=8YFo7-63X7w)
 * @param {string} url
 * @return {object}
 */
export function getVideoData(url) {

    const parseUrl = generateVideoUrl(url);
    try {
        return sendRequest(parseUrl).then((response, error) => {
            let res = response.items[0];
            return {

                videoId: res.id,
                videoUrl: `https://www.youtube.com/watch?v=${res.id}`,
                channelId: res.snippet.channelId,
                channelTitle: res.snippet.channelTitle,
                title: res.snippet.title,
                description: res.snippet.description,
                thumbnail: res.snippet.thumbnails.high, // object
                publishedAt: res.snippet.publishedAt,
                channelUrl: `https://www.youtube.com/channel/${res.snippet.channelId}`,
                tags: res.snippet.tags, // array

                likeCount: res.statistics.likeCount,
                dislikeCount: res.statistics.dislikeCount,
                viewCount: res.statistics.viewCount,
                commentCount: res.statistics.commentCount,

                duration: res.contentDetails.duration,
            };
        });
    } catch (error) {
        return {error};
    }
}

/**
 * render video url to request url
 * @param url
 * @return {string} parse url
 */
const generateVideoUrl = (url) => `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${getVideoId(url)}&maxResults%7D&key=${configYoutube.userKey}`;


/**
 * function render url and return only video id, if wrong url return 0
 * @param {string} url
 * @return {string} idVideo[1]
 */
export const getVideoId = (url) => {
    const idVideo = url.match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/);
    if (idVideo !== null) {
        console.log(idVideo[1]);
        return idVideo[1];
    } else {
        console.error('Wrong URL');
        return 0;
    }
};

