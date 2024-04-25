import React from 'react'
import videoSrc from '../../assets/aotvideo.webm';

const video = () => {
  return (
    <div className=" relative h-screen">
        <video src={videoSrc} autoPlay loop muted className="w-full h-3/4 object-cover absolute inset-0 z-0" />
      </div>

  )
}

export default video
