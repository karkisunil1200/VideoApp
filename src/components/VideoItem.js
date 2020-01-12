import React from 'react';

const VideoItem = ({video}) => {
  return <div>The title of the item is : {video.snippet.title}</div>;
};

export default VideoItem;
