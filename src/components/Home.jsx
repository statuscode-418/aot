import React from 'react'
import Navbar from './navbar.jsx';
import MarqueeAnouncement from './marqueeAnnounement.jsx';

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className='py-5 bg-aot-bone'>
        <MarqueeAnouncement announcements={['Welcome to Astro', 'Astro is a new static site builder', 'Astro is built with React']} />
      </div>
    </div>
  )
}

export default Home
