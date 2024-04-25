import React from 'react';
import videoSrc from '../../assets/aotvideo.webm';

const Video = () => {
  return (
    <div className="relative h-screen" style={{ height: '75vh' }}>
      <video src={videoSrc} autoPlay loop muted className="w-full h-full object-cover absolute inset-0 z-0" />
    </div>
  );
}

export default Video;
