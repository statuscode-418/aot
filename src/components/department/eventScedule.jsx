import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
const eventScedule = () => {
    const Event_scedule=[
        {
            number:1,
            text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, "
        },
        {
            number:2,
            text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, "
        },
        {
            number:3,
            text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, "
        },
        {
            number:4,
            text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, "
        },
        {
            number:5,
            text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, "
        },
        {
            number:6,
            text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, "
        },
        {
            number:7,
            text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, "
        }
        
    ];

    useEffect(() => {
        AOS.init({
          duration: 2000,  
          once: false,     
          mirror: false 
        });
      }, []);
  return (
    <div className='flex flex-col items-center justify-center'>
    <h1  className='text-[#0F2167] font-bold text-[50px] flex items-center justify-center'  >Event Scedule</h1>
    {Event_scedule.map((event, index) => (
        <div key={index} className='flex p-2 gap-6 w-[100vw] text-white items-center justify-center'>
            <div  className={`left border border-black h-[150px] w-[400px] bg-[#0F2167] p-4 mt-[-40px] ${event.number % 2 === 0 ? 'hidden' : ''}`}>
                {event.text}
            </div>
            <div className={`left  h-[250px] w-[400px]  ${event.number % 2 === 1 ? 'hidden' : ''}`}>
                
            </div>

            <div className="mid_portion flex flex-col items-center justify-center">
                <div className="middle_round border border-[#Ffcc00] bg-[#0F2167] border-[5px] h-[90px] w-[90px] rounded-[50%]">

                </div>
                <div className="middle_stick border border-[#0F2167] border-[6px] h-[200px] w-[0px]">

                </div>
            </div> 
            <div  className={`left border border-black h-[150px] w-[400px] bg-[#0F2167] p-4 mt-[-40px] ${event.number % 2 === 1 ? 'hidden' : ''}`}>
                {event.text}
            </div>
            <div className={`left  h-[250px] w-[400px]  ${event.number % 2 === 0 ? 'hidden' : ''}`}>
                
            </div>
        </div>
        ))}
        <div className="middle_round border border-[#Ffcc00] bg-[#0F2167] border-[5px] h-[90px] w-[90px] rounded-[50%]">

</div>
    </div>
  )
}

export default eventScedule
