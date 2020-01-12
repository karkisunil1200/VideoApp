import React from 'react';

const VideoItem = ({video}) => {
  return (
    <div>
      <h1>Video Item</h1>
      {video.length}
    </div>
  );
};

export default VideoItem;
