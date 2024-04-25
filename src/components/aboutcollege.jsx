import React from 'react';

const AboutCollege = () => {
    return (
        <div className='relative mt-10 h-screen flex flex-col items-center'>
            <h1 className="text-6xl font-bold text-white mt-20">About College</h1>
            <div className='absolute inset-0 bg-contain bg-center' style={{ backgroundImage: 'url("../assets/aot2.jpg")', zIndex: '-1' }}>
            </div>
            <div className="flex w-full mt-32">
                <div className="w-1/2 flex justify-center items-center backdrop-blur-md bg-black bg-opacity-30 p-6 ml-28" style={{ borderRadius: '25px' }}>
                    <p className="text-2xl text-center text-white">Academy of Technology (AOT), located amidst the beautiful surroundings of Adisaptagram, has been a beacon of educational excellence since its founding in 2003. More than just an engineering college, AOT is a symbol of ingenuity and dedication, weaving a lovely mix of technology and ethics.
                        Founded by the visionary "Ananda Educational Development and Charitable Organisation" (AEDCO), AOT has evolved over 18 years, constantly reinventing itself to embrace the boundless horizons of engineering and technology. Our journey is not merely about imparting knowledge; it's a transformative experience that encourages every student to think differently and explore new possibilities.
                    </p>
                </div>
                <div className="w-1/2 flex justify-center items-center">
                    <img src="../assets/aot1.png" alt="AOT" style={{ border: '5px solid #F2ebe3', borderRadius: '25px' }} />
                </div>
            </div>
        </div>
    )
}

export default AboutCollege;
