import React,{useEffect, useState} from 'react'
import AboutCollegeV2 from './aboutCollegeV2'
import BackToTop from './backToTop'
import Companies from './companies'
import Counter from './counter'
import Navbar from './Navbar/navbar'
import { EventComponent } from "../components/events/eventComponent";
import Footer from './footer'
import Header from './header'
import Movement from './movement'
import News_bul from './News_bul'
import Video from './video'
import Preloader from './Preloader/preloader'
import {AnimatePresence} from 'framer-motion'

const main = () => {
     const [isLoading, setIsLoading] = useState(true);

  useEffect( () => {
    (
      async () => {
          const LocomotiveScroll = (await import('locomotive-scroll')).default
          const locomotiveScroll = new LocomotiveScroll();

          setTimeout( () => {
            setIsLoading(false);
            document.body.style.cursor = 'default'
            window.scrollTo(0,0);
          }, 2000)
      }
    )()
  }, [])

  return (
  <>
    <AnimatePresence mode='wait'>
        {isLoading && <Preloader />}
      </AnimatePresence>
    <Header  />
		<Navbar />
		<Video />
		<Movement  />
		<EventComponent />
		<AboutCollegeV2 />
		<News_bul  />
		<Counter  />
		<Companies />
		<Footer  />
		<BackToTop />
  </>
  )
}

export default main
