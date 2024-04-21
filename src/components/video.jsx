import React from 'react'
import VideoBack from "../../public/assets/aotvideo.mp4"
const video = () => {
  return (
    <div className='w-full h-screen'>
      <video src={VideoBack} autoPlay loop muted className='w-full h-screen object-cover' />
    </div>
  )
}

export default video
