import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { EffectFade } from 'swiper/modules';
import { news } from '../constants/news';
import { motion } from 'framer-motion';

const News_bul = () => {
  const [swiper, setSwiper] = useState(null);
  const [swiperm, setSwiperm] = useState(null);

  const handlePrevButtonClick = () => {
    if (swiper !== null) {
      swiper.slidePrev();
    }
  };

  const handleNextButtonClick = () => {
    if (swiper !== null) {
      swiper.slideNext();
    }
  };

  const handlePrevButtonClickm = () => {
    if (swiperm !== null) {
      swiperm.slidePrev();
    }
  };

  const handleNextButtonClickm = () => {
    if (swiperm !== null) {
      swiperm.slideNext();
    }
  };

  return (
    <div className='p-12 flex flex-col justify-between lg:p-2 '>
      <div className="text-[35px]  font-bold text-black border-2 w-full border-black flex flex-col justify-center items-center p-4"><h1>News Bulletin :</h1></div>
      <div className="hidden lg:block ">
        <div className="all_news_container pl-20 flex m-5 justify-between flex-wrap gap-15 items-center">
          <Swiper
            spaceBetween={50}
            slidesPerView={3}
            onSlideChange={() => console.log('slide change')}
            onSwiper={setSwiper}
          >
            {news.map((card, id) => (
              <SwiperSlide key={id}>
                <motion.div
                  className='p-4 border-[3px] border-black rounded-[20px] w-[90vw] lg:w-[25vw] shadow-lg transform perspective-1000'
                  whileHover={{
                    scale: 1.01,
                    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2), 0 0 0 3px rgba(0, 0, 0, 0.2)',
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="image-container relative w-[60vw] lg:w-[23vw]">
                    <div className='border-2 border-black rounded-[20px]'>
                    <img src={card.img} alt="" className='rounded-[20px]  w-full h-[200px] object-cover' />
                    </div>
              <div className="overlay absolute left-[10px] top-[50%] text-white font-bold text-[20px] bg-black/50 p-2 rounded-md">
                      <p >{card.Title}</p>
                      {card.Author}
                    </div>
                  </div>
                  <div className="names border-[3px] border-black p-4 m-3 rounded-md text-[20px] font-bold pt-4 flex items-center justify-center flex-col">
                  <h1> {card.details} </h1>
                    <div className='m-3'> 
                    <motion.button
                       onClick={handlePrevButtonClick}
                       whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                       transition={{ duration: 0.3 }}
                       className="bg-blue-500 text-white px-4 border-2 border-black py-2 rounded-md"
          >
                <a href={card.link} className="text-black hover:underline">Read more...</a>
                    </motion.button>
                    </div>
                    </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="flex justify-center mt-15 gap-4">
          <motion.button
            onClick={handlePrevButtonClick}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="bg-blue-500 border-2 border-black text-black font-bold px-4 py-2 rounded-md"
          >
            Previous
          </motion.button>
          <motion.button
            onClick={handleNextButtonClick}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="bg-blue-500 text-black font-bold px-4 border-2 border-black py-2 rounded-md"
          >
            Next
          </motion.button>
        </div>
      </div>

      {/* // mobile view */}
      <div className="mobile lg:hidden">
        <div className="all_news_container flex flex-wrap gap-6 items-center justify-center">
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={setSwiperm}
          >
            {news.map((card, id) => (
              <SwiperSlide key={id}>
                <motion.div
                  className='p-4 border-[3px] border-black rounded-[20px] w-[70vw] lg:w-[25vw] shadow-lg transform perspective-1000'
                  whileHover={{
                    scale: 1.05,
                    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2), 0 0 0 3px rgba(0, 0, 0, 0.2)',
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="image-container relative w-[60vw] lg:w-[23vw]">
                    <img src={card.img} alt="" className='rounded-[20px] w-full' />
                    <div className="overlay absolute left-[10px] top-[50%] text-white font-bold text-[20px] bg-black/50 p-2 rounded-md">
                      <p>{card.Title}</p>
                      {card.Author}
                    </div>
                  </div>
                  <div className="names text-[20px] pt-4 flex items-center justify-center flex-col">
                    {card.details}
                    <a href={card.link} className="text-blue-500 hover:underline">Read more...</a>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="flex justify-center mt-4 gap-4 font-boldo">
          <motion.button
            onClick={handlePrevButtonClickm}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="bg-blue-500 text-white px-4 font-bold py-2 rounded-md"
          >
           <span className='font-bold'> Previous </span>
          </motion.button>
          <motion.button
            onClick={handleNextButtonClickm}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="bg-blue-500 text-white px-4 font-bold py-2 rounded-md"
          >
            Next
          </motion.button>
        </div>
      </div>
    </div>
  )
}

export default News_bul
