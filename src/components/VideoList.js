import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({videos}) => {
  const renderedList = videos.map(video => <VideoItem video={videos} key={video.id.videoId} />);

  return <div>{renderedList}</div>;
};

export default VideoList;
