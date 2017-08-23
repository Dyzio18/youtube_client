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
					videoUrl: `https://www.youtube.com/watch?v=${elem.id.videoId}`,
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
		});
	} catch(error){
		return {error};
	}
};


/**
 * search videos by keywords,
 * @param {string} query
 * @return {object}
 */
export const findChannel = (query) =>  {
	try {
		const parseUrl =  parseSearchUrl(query, 'channel');
		return sendRequest(parseUrl).then((response, error) => {
			const responseData = [];
			response.items.forEach((elem) => {
				const searchItem = {
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
		});
	} catch(error){
		return {error};
	}
};

/**
 * search videos by keywords,
 * @param {string} query
 * @param {string} _channelId
 * @return {object}
 */
export const findVideosInChannel = (query, _channelId) =>  {
	try {
		const parseUrl =  parseSearchUrl(query, 'video', _channelId);
		return sendRequest(parseUrl).then((response, error) => {
			const responseData = [];
			response.items.forEach((elem) => {
				const searchItem = {
					videoId: elem.id.videoId,
					videoUrl: `https://www.youtube.com/watch?v=${elem.id.videoId}`,
					channelId: _channelId,
					publishedAt: elem.snippet.publishedAt,
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
		});
	} catch(error){
		return {error};
	}
};

/**
 * parse input to url ready to request
 * @param {string} query - search by keywords
 * @param {string} type - type of search (video or channel)
 * @param {string} channelId  - optional if we want search video in select channel
 * @return {string} url
 */
const parseSearchUrl = (query, type, channelId = 0) => {
	const order = 'relevance';
	const maxResult = '15';

	return `https://www.googleapis.com/youtube/v3/search?part=snippet&${ channelId ? `channelId=${channelId}&` : ''}maxResults=${maxResult}&order=${order}&type=${type}&q=${query}&key=${configYoutube.userKey}`;
};


/*
EXAMPLES:
 https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&type=video&q=cat&key=AIzaSyDrlVfgXyOC7omkycJ7LMeyxMjEQERi2xA

https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCACp5rqV3Ki0SNdXWDBLhRA&maxResults=50&type=video&q=junior%20developer&key=AIzaSyDrlVfgXyOC7omkycJ7LMeyxMjEQERi2xA
 */
