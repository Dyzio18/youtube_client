import React from 'react';
import VideoListElem from './VideoListElem';

const VideoList = (props) => {
    const videoElements = props.videos.map((video) => {
        return (
            <VideoListElem
                onVideoSelect={props.onVideoSelect}
                key={video.videoId}
                video={video}
            />
        );
    });

    if (props.videos != 0){
        return (
            <section>
                <ul className="span5 list-group">
                    <div className="page-header">Proponowane</div>
                    {videoElements}
                </ul>
            </section>
        );
    } else
        return (
            <div>

            </div>
        )

};

export default VideoList;