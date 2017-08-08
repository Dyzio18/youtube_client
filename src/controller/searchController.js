import {sendRequest} from '../service/requestServices';
import {configYoutube} from '../../config/config.youtube';

/**
 * search videos by keywords,
 * @param {string} query
 * @return {object}
 */
export const findVideos = (query) =>  {

    try {
        const parseUrl =  parseSearchUrl(query, 'video');

        return sendRequest(parseUrl).then((response, error) => {
            const responseData = [];
            response.items.forEach((elem) => {
                const searchItem = {
                    videoId: elem.id.videoId,
                    publishedAt: elem.snippet.publishedAt,
                    channelId: elem.snippet.channelId,
                    channelUrl: `https://www.youtube.com/channel/${elem.snippet.channelId}`,
                    title: elem.snippet.title,
                    description: elem.snippet.description,
                    thumbnails: elem.snippet.thumbnails.medium.url,
                    channelTitle: elem.snippet.channelTitle
                };
                responseData.push(searchItem);
            });
            return responseData;
        }).catch(err => {
            return err;
        })
    } catch(error){
        return {error};
    }
};


const parseSearchUrl = (query, type) => {
    return `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&type=${type}&q=${query}&key=${configYoutube.userKey}`;
};



