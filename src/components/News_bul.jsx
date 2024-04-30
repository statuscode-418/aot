import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { news } from '../constants/news';
import { motion } from 'framer-motion';

const News_bul = () => {
  const [swiper, setSwiper] = useState(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [hoverIndex, setHoverIndex] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (swiper !== null && currentSlideIndex < news.length - 1) {
        swiper.slideNext();
        setCurrentSlideIndex(prevIndex => prevIndex + 1);
      }
    }, 10000); // 10 seconds interval

    return () => clearInterval(interval);
  }, [swiper, currentSlideIndex]);

  const handleMouseEnter = (index) => {
    setHoverIndex(index);
  };

  const handleMouseLeave = () => {
    setHoverIndex(null);
  };

  return (
    <div className='p-12 flex flex-col justify-between lg:p-2 '>
      <div className="text-[35px]  font-bold text-black  w-full  flex flex-col justify-center items-center p-4"><h1>News Bulletin :</h1></div>
      <div className="hidden lg:block">
        <div className="all_news_container pl-20 flex m-5 justify-between flex-wrap gap-15 items-center ">
          <Swiper
            spaceBetween={50}
            slidesPerView={3}
            onSlideChange={() => console.log('slide change')}
            onSwiper={setSwiper}
            className=' flex items-center justify-center'
          >
            {news.map((card, id) => (
              <SwiperSlide key={id}>
                <motion.div
                  className='p-4 border-[3px] border-black rounded-[20px] w-[90vw] lg:w-[25vw] shadow-lg transform perspective-1000 m-[10px]'
                  whileHover={{
                    scale: 1.01,
                    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2), 0 0 0 3px rgba(0, 0, 0, 0.2)',
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  onMouseEnter={() => handleMouseEnter(id)}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="image-container relative w-[60vw] lg:w-[23vw]">
                      <img src={card.img} alt="" className='rounded-[20px]  w-full h-[200px] object-cover' />
                      
                    <div className="overlay absolute left-[10px] top-[50%] text-white font-bold text-[20px] bg-black/50 p-2 rounded-md">
                      <p >{card.Title}</p>
                      {card.Author}
                    </div>
                  </div>
                  <div className="names border-[3px] border-black p-4 m-3 rounded-md text-[20px] font-bold pt-4 flex items-center justify-center flex-col">
                    <h1> {card.details} </h1>
                    <div className='m-3'>
                      {hoverIndex === id ? (
                        <motion.a
                          href={card.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          transition={{ duration: 0.3 }}
                          className="bg-blue-500 text-white px-4 border-2 border-black py-2 rounded-md"
                        >
                          Read more...
                        </motion.a>
                      ) : (
                        <p>{new Date().toLocaleDateString()}</p>
                      )}
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="mobile lg:hidden">
        {/* Mobile Slider Code */}
      </div>
    </div>
  )
}

export default News_bul;
