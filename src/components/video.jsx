import React from 'react'
import videoSrc from '../../assets/aotvideo.webm';
const video = () => {
  return (
    <>
    
<section class="relative w-full h-[75vh]">
  <video src={videoSrc} poster="../assets/aot2.jpg" autoPlay loop muted className="w-full h-full object-cover absolute inset-0 z-0" />
</section>
    </>
  )
}

export default video


