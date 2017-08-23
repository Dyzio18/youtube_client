import React from 'react';
import Iframe from 'react-iframe'
import VideoDetailDesc from './VideoDetailsDesc';

const VideoDetail = ({video}) => {
    if (!video) {
        return <div> Brak wynikow</div>;
    }

    const url = `https://www.youtube.com/embed/${video.videoId}`;

    return (
        <section>
            <div>
                <Iframe url={url} position="relative" width="100%" height="320px" allowFullScreen/>
            </div>
            <div className="details">
                <p><span className="label-important">Title:</span> {video.title}</p>
            </div>
        </section>
    );
};

export default VideoDetail;

