import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { EffectFade } from 'swiper/modules';
import { news } from '../constants/news';
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
    <div className='p-8'>
      <div className="text-[35px] font-bold text-black p-4">News Bulletin :</div>
      <div className="hidden lg:block lgveiw">
      <div className="all_news_container flex  flexwrap gap-6 items-center justify-center ">
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        
        onSlideChange={() => console.log('slide change')}
        onSwiper={setSwiper}
      >
        {news.map((card, id) => (
          <SwiperSlide key={id}>
            <div className='p-4 border-[3px] border-black rounded-[20px] w-[80vw] lg:w-[30vw]'>
              <div className="image-container relative w-[70vw] lg:w-[28vw]">
                <img src={card.img} alt="" className='rounded-[20px]' />
                <div className="overlay absolute left-[10px] top-[50%] text-white font-bold text-[25px]">
                  <p>{card.Title}</p>
                  {card.Author}
                </div>
              </div>
              <div className="names text-[25px] pt-4 flex items-center justify-center flex-col">
                {card.details}
                <a href={card.link}>Read more...</a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
      <div className="flex justify-center mt-4 gap-4 ">
        <button onClick={handlePrevButtonClick}>Previous</button>
        <button onClick={handleNextButtonClick}>Next</button>
      </div>
      </div>



{/* // mobile veiw */}
<div className="mobile lg:hidden">
<div className="all_news_container flex  flexwrap gap-6 items-center justify-center">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        
        onSlideChange={() => console.log('slide change')}
        onSwiper={setSwiperm}
      >
        {news.map((card, id) => (
          <SwiperSlide key={id}>
            <div className='p-4 border-[3px] border-black rounded-[20px] w-[80vw] lg:w-[30vw]'>
              <div className="image-container relative w-[70vw] lg:w-[28vw]">
                <img src={card.img} alt="" className='rounded-[20px]' />
                <div className="overlay absolute left-[10px] top-[50%] text-white font-bold text-[25px]">
                  <p>{card.Title}</p>
                  {card.Author}
                </div>
              </div>
              <div className="names text-[25px] pt-4 flex items-center justify-center flex-col">
                {card.details}
                <a href={card.link}>Read more...</a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
      <div className="flex justify-center mt-4 gap-4 ">
        <button onClick={handlePrevButtonClickm}>Previous</button>
        <button onClick={handleNextButtonClickm}> Next</button>
      </div>
</div>



      


    </div>

   
  )
}

export default News_bul
