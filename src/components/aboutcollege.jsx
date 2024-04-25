import React from 'react';

const AboutCollege = () => {
    return (
        <div className='relative mt-10 h-screen flex flex-col items-center'>
            <h1 className="text-6xl font-bold text-white mt-20">About College</h1>
            <div className='absolute inset-0 bg-contain bg-center' style={{ backgroundImage: 'url("../assets/aot2.jpg")', zIndex: '-1' }}></div>
            <div className="flex w-full mt-32">
                <div className="w-1/2 flex justify-center items-center backdrop-blur-md bg-black bg-opacity-30 p-6 ml-28" style={{borderRadius: '25px'}}>
                    <p className="text-4xl text-center text-white">All open forth gathering called midst, fill have was greater bearing heaven it isn't god shall you're in divide make. Let that waters moved i cattle have kind place make were every own dominion you'll two creature life night his fish signs two. From and, evening had all midst all.
                        Nabajit Kaushik Rohan Anjishnu all are pro coders, rest all of them are trash. We are sigma pro coders we will defeat them all.
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
