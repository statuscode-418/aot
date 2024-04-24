import React from 'react';

const AboutCollege = () => {
    return (
        <div className='relative mt-10 h-screen border border-black p-2 flex flex-col justify-start items-center'>
            <h1 className="text-4xl font-bold text-white z-10 mt-4">About College</h1>
            <div className='absolute inset-0 bg-contain bg-center' style={{ backgroundImage: 'url("../assets/aot2.jpg")', filter: 'blur(5px)', zIndex: '-1' }}>
            </div>
            <div className="z-10 relative">
                <img className='absolute right-0 top-0' src="../assets/aot1.png" alt="AOT" />
                <p className="z-[999] mt-4 text-white">All open forth gathering called midst, fill have was greater bearing heaven it isn't god shall you're in divide make. Let that waters moved i cattle have kind place make were every own dominion you'll two creature life night his fish signs two. From and, evening had all midst all.
                    Nabajit Kaushik Rohan Anjishnu Ritam all are pro coders, rest all of them are trash. We are sigma pro coders we will defeat them all.
                </p>
            </div>
        </div>
    )
}

export default AboutCollege;

