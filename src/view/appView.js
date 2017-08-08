import {getVideoData} from '../controller/videoController';
import {getCommentsData} from '../controller/commentsController';
import {findVideos} from "../controller/searchController"

const videoURL = 'https://www.youtube.com/watch?v=zcq4c0I_sVk';

export const appView = root => {

    document.getElementById('searchButton').addEventListener("click", () => {

        const searchContent = document.getElementById('search').value;

        if (searchContent) {

            findVideos(searchContent)
                .then(data => {
                    console.log(data);
                    findPanel(data);
                }).catch(err => {
                error.log(err)
            });

            /* getVideoData(searchContent)
                 .then(data => {
                     displayVideoData(data);
                 }).catch(err => {
                 error.log(err);
             });
             getCommentsData(searchContent)
                 .then(data => {
                     console.log(data[1]);
                     displayCommentsData(data);
                 }).catch(err => {
                 error.log(err);
             });*/
        }
    });
};

const displayVideoData = response => {
    document.getElementById('videoData').innerHTML = '';
    document.getElementById('videoData').innerHTML += `<!-- VIDEO DISPLAY --><!--  <img class="video__preview center" src="${response.thumbnail.url}">-->
<iframe width="100%" height="400px" src="https://www.youtube.com/embed/${response.videoId}" frameborder="0" allowfullscreen></iframe> 

            <div class="row-fluid ">
                <h1 class="lead ">
                    <span class="label label-success">title </span>
                    ${response.title}
                </h1>
                <div class="tabbable lead"> <!-- Only required for left/right tabs -->
                    <ul class="nav nav-tabs">
                        <li class="active"><a href="#tab1" data-toggle="tab">Description</a></li>
                        <li><a href="#tab2" data-toggle="tab">More info</a></li>
                    </ul>
                    <div class="tab-content">
                        <div class="tab-pane active" id="tab1">
                            <p>
                                <span class="label-important">@author:</span>
                                ${response.channelTitle}
                                <a href="${response.channelUrl}">link</a>
                                <br>
                                <span class="">Description </span>:
                                ${response.description}
                            </p>
                        </div>
                        <div class="tab-pane" id="tab2">
                            <div class="span6">
                                <span class="">Date </span>: ${response.publishedAt} <br>
                                <span class="">TAGs </span>: ${response.tags} <br>
                            </div>
                            <div class="span6">
                                <span class="">View</span>: ${response.viewCount} <br>
                                <span class="label label-success">Like </span>: ${response.likeCount} <br>
                                <span class="label label-warning">Dislike </span>: ${response.dislikeCount} <br>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`
};

const displayCommentsData = response => {
    document.getElementById('comments').innerHTML = '';
    let commentsContent = '';
    response.forEach((elem) => {
        commentsContent += `<div class="media">
        <a class="pull-left" href="#">
            <img class="media-object" data-src="holder.js/64x64" alt="64x64" src="${elem.authorProfileImageUrl}" style="width: 64px; height: 64px;">
        </a>
        <div class="media-body">
            <h4 class="media-heading">${elem.authorDisplayName} <a href="${elem.authorChannelUrl}">link</a> +${elem.likeCount}</h4 > 
            ${elem.textDisplay}
            </div>
            </div>`
    });
    document.getElementById('comments').innerHTML = commentsContent;

};

const findPanel = response => {
    const findPanel = document.getElementById('findPanel');
    findPanel.innerHTML = '';

    let searchContent = '';
    response.forEach((elem) => {
        searchContent += `<img src="${elem.thumbnails}">`;
    });
    findPanel.innerHTML = searchContent;


};