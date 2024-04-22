import React from 'react'
import VideoBack from "../assets/aotvideo.webm"
const video = () => {
  return (
    <div className='w-full h-screen'>
      <video src={VideoBack} autoPlay loop muted className='w-full h-screen object-cover' />
    </div>
  )
}

export default video

