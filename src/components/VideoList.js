import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({videos, selectedVideo}) => {
  const renderedList = videos.map(video => {
    return (
      <VideoItem
        key={video.id.videoId}
        video={video}
        key={video.id.videoId}
        selectedVideo={selectedVideo}
      />
    );
  });

  return <div className='ui relaxed divided-list'>{renderedList}</div>;
};

export default VideoList;
