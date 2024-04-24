import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
const News_bul = () => {
    const news=[
        {
            id:1,
            Title:"Techfiesta 2k24",
            Author:"Dilip Kumar Maity",
            img:"https://www.mywbut.com/logo_pic/65ae1b28e983c01c875bb596dbd81547.jpg",
            details:"All open forth gathering called midst, fill have was greater bearing heaven it isn't god shall you're in divide make. Let that waters moved i cattle have kind place make were every own dominion you'll two creature life night his fish signs two. From and, evening had all midst all. Nabajit Kaushik Rohan Anjishnu Ritam all are pro coders, rest all of them are trash. We are sigma pro coders we will defeat them all.",
            link:"ja khusi bosia dibi"
        },
        {
            id:2,
            Title:"Techfiesta 2k24",
            Author:"Dilip Kumar Maity",
            img:"https://www.mywbut.com/logo_pic/65ae1b28e983c01c875bb596dbd81547.jpg",
            details:"All open forth gathering called midst, fill have was greater bearing heaven it isn't god shall you're in divide make. Let that waters moved i cattle have kind place make were every own dominion you'll two creature life night his fish signs two. From and, evening had all midst all. Nabajit Kaushik Rohan Anjishnu Ritam all are pro coders, rest all of them are trash. We are sigma pro coders we will defeat them all.",
            link:"ja khusi bosia dibi"
        },
        {
            id:3,
            Title:"Techfiesta 2k24",
            Author:"Dilip Kumar Maity",
            img:"https://www.mywbut.com/logo_pic/65ae1b28e983c01c875bb596dbd81547.jpg",
            details:"All open forth gathering called midst, fill have was greater bearing heaven it isn't god shall you're in divide make. Let that waters moved i cattle have kind place make were every own dominion you'll two creature life night his fish signs two. From and, evening had all midst all. Nabajit Kaushik Rohan Anjishnu Ritam all are pro coders, rest all of them are trash. We are sigma pro coders we will defeat them all.",
            link:"ja khusi bosia dibi"
        },
        {
            id:4,
            Title:"Techfiesta 2k24",
            Author:"Dilip Kumar Maity",
            img:"https://www.mywbut.com/logo_pic/65ae1b28e983c01c875bb596dbd81547.jpg",
            details:"All open forth gathering called midst, fill have was greater bearing heaven it isn't god shall you're in divide make. Let that waters moved i cattle have kind place make were every own dominion you'll two creature life night his fish signs two. From and, evening had all midst all. Nabajit Kaushik Rohan Anjishnu Ritam all are pro coders, rest all of them are trash. We are sigma pro coders we will defeat them all.",
            link:"ja khusi bosia dibi"
        },
        {
            id:5,
            Title:"Techfiesta 2k24",
            Author:"Dilip Kumar Maity",
            img:"https://www.mywbut.com/logo_pic/65ae1b28e983c01c875bb596dbd81547.jpg",
            details:"All open forth gathering called midst, fill have was greater bearing heaven it isn't god shall you're in divide make. Let that waters moved i cattle have kind place make were every own dominion you'll two creature life night his fish signs two. From and, evening had all midst all. Nabajit Kaushik Rohan Anjishnu Ritam all are pro coders, rest all of them are trash. We are sigma pro coders we will defeat them all.",
            link:"ja khusi bosia dibi"
        },
        {
            id:6,
            Title:"Techfiesta 2k24",
            Author:"Dilip Kumar Maity",
            img:"https://www.mywbut.com/logo_pic/65ae1b28e983c01c875bb596dbd81547.jpg",
            details:"All open forth gathering called midst, fill have was greater bearing heaven it isn't god shall you're in divide make. Let that waters moved i cattle have kind place make were every own dominion you'll two creature life night his fish signs two. From and, evening had all midst all. Nabajit Kaushik Rohan Anjishnu Ritam all are pro coders, rest all of them are trash. We are sigma pro coders we will defeat them all.",
            link:"ja khusi bosia dibi"
        }
        
    ]
  return (
    <div className='p-8'>
        <div className="title text-[35px] font-bold p-4">News Bulletin</div>
        

      <div className="all_news_container flex flexwrap gap-6 items-center justify-center">
      <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {news.map((card, id) => (
        <SwiperSlide>
    <div
      key={id} className='p-4 border border-[3px] border-black rounded-[20px] w-[550px]'
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
