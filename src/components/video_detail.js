import React from 'react';

const VideoDetail = (props) => {
    const video = props.video;

    if(!video) {
        return <div className="video-detail">Loading Search Results....</div>
    }

    const url = `https://www.youtube.com/embed/${video.id.videoId}`;

    return (
        <div>
            <div className="embed-responsive embed-responsive-21by9">
                <iframe className="embed-responsive-item" src={url}></iframe>
            </div>
            <hr/>
            <div>
                <div>
                    <span>
                        <strong>Title: </strong>
                        {video.snippet.title}
                    </span>
                    </div>
                <div>
                    <span>
                        <strong>Description: </strong>
                        {video.snippet.description}
                    </span>
                </div>
            </div>
            <hr/>
        </div>
    );
};

export default VideoDetail;
