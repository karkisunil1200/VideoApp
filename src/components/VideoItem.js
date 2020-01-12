import React from 'react';

import './VideoItem.css';

const VideoItem = ({video, selectedVideo}) => {
  return (
    <div
      onClick={() => selectedVideo(video)}
      className='video-item item'
      style={{boxShadow: '0 5px 10px #ccc', padding: '10px', margin: '5px 0'}}
    >
      <img
        className='ui image'
        alt={video.snippet.title}
        src={video.snippet.thumbnails.medium.url}
      />
      <div className='content'>
        <div className='header'>{video.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
