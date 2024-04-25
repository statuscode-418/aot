import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { news } from '../constants/news';
const News_bul = () => {

  return (
    <div className='p-8'>
      <div className="title text-[35px] font-bold p-4">News Bulletin</div>


      <div className="all_news_container gap-6 items-center justify-center">
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {news.map((card, id) => (
            <SwiperSlide>
              <div
                key={id} className='p-4 border-[3px] border-black rounded-[20px] w-[550px]'
              >
                <div className="image-container relative w-[500px]">
                  <img src={card.img} alt="" className='rounded-[20px]' />
                  <div className="overlay absolute left-[10px] top-[180px] text-white font-bold text-[25px]">
                    <p className="  ">{card.Title}</p>

                    {card.Author}
                  </div>
                </div>
                <div className="names text-[25px] pt-4 flex items-center justify-center flex-col">
                  {card.details}
                  <a href={card.link}>...see more </a>

                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default News_bul
