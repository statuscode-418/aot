import React from 'react';
import { FaBullhorn } from "react-icons/fa";

const AcademyHeader = () => (
  <>
    <header className="mt-10">
      <div className="bg-yellow-500 h-2 w-full"></div>
      <div className="container mx-auto flex justify-between items-center py-4">
        <a href="/" className="flex items-center">
          <img src="../../public/aot-logo.jpg" alt="Academy of Technology" className="h-15 mr-2" />
        </a>
        <div className="flex-grow flex flex-col items-center">
          <h1 className="text-2xl font-bold text-center">ACADEMY OF TECHNOLOGY</h1>
          <p className="text-sm mt-1">...translate your vision into reality</p>
        </div>
        <FaBullhorn className="text-[#000080]" style={{ fontSize: '4rem' }} />
      </div>
    </header>
    <nav className="bg-yellow-500 border-y border-gray-300">
      <div className="container mx-auto px-4 py-2 text-zinc-900">
        <ul className=" flex justify-between items-center">
          {['academics', 'research', 'students', 'faculty'].map((link, index) => (
            <li key={index}>
              <a href={`/${link}`} className="font-medium hover:text-zinc-200 capitalize">
                {link}
              </a>
            </li>
          ))}
          <li>
            <button className="bg-yellow-500 text-[#000080] px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-500">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  </>
);

export default AcademyHeader;


