import React from 'react';

const VideoListElem = ({video, onVideoSelect}) => {


    return (
        <li onClick={() => onVideoSelect(video)} className="list-group-item">
            <hr/>
            <div className="media">
                <a className="pull-left" href="#">
                    <img className="media-object video__thumbnails" alt={video.title} src={video.thumbnails}/>
                </a>
                <div className="media-body">
                    <h4 className="media-heading">{video.channelTitle}</h4>
                    {video.title}
                </div>
            </div>
        </li>
    );
};

export default VideoListElem;