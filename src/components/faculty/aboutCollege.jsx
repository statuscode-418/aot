
import React from 'react';

const AboutComponent = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:text-center md:text-left">
            <h1 className="text-7xl font-bold mb-12 text-center text-blue-900 mt-6">About</h1>
            <h2 className="text-4xl font-bold mb-4 text-blue-900">Quality education starts with its educators</h2>
            <p className="font-bold mb-5 text-2xl">AOT believes in creating an environment that helps the students to enhance their intellectual, emotional, and physical development. Prof. (Dr.) Dilip Bhattacharya, renowned Professor of Electronics & Electrical Communication Engineering from IIT Kharagpur and the Director of Academy of Technology, leads a team of 111 qualified and experienced faculty members conforming to AICTE stipulated teacher-student ratio.</p>

            <ul className="list-none font-bold ml-6 mb-9 text-2xl">
                <li className='mb-5'>
                    <span className="text-red-600 mr-2 text-3xl">&#9830;</span>
                    81 regular faculty members are having specialization in Industry 4.0 Technologies, e.g., Internet of Things (IOT), 3D Technology, Machine Learning, Data Science, Cloud Computing, Cyber Security, Renewable Energy & Energy Management.
                </li>
                <li className='mb-5'>
                    <span className="text-red-600 mr-2 text-3xl">&#9830;</span>
                    Average teaching experience of faculty members is 11 years 8 months.
                </li>
                <li className='mb-5'>
                    <span className="text-red-600 mr-2 text-3xl">&#9830;</span>
                    Faculty members of AOT have published 84 papers in various International & National Journals.
                </li>
                <li className='mb-5'>
                    <span className="text-red-600 mr-2 text-3xl">&#9830;</span>
                    Existing faculty members of AOT have authored 11 books.
                </li>
            </ul>
        </div>


    );
}

export default AboutComponent;