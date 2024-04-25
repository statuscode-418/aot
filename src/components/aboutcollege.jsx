import React from 'react';

const AboutCollege = () => {
    return (
        <div className='relative mt-10 h-screen flex flex-col items-center'>
            <h1 className="text-6xl font-bold text-white mt-20">About College</h1>
            <div className='absolute inset-0 bg-contain bg-center' style={{ backgroundImage: 'url("../assets/aot2.jpg")', zIndex: '-1' }}>
            </div>
            <div className="flex w-full mt-32">
                <div className="w-1/2 flex justify-center items-center backdrop-blur-md bg-black bg-opacity-30 p-6 ml-28" style={{ borderRadius: '25px' }}>

                    <p className="text-4xl lg:text-8xl text-center text-white">
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
