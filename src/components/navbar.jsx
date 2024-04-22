import React, { useState, useEffect, useRef } from 'react';
import { FaBullhorn } from "react-icons/fa";
import '../../public/styles/nav.css';
import Video from '../components/video.jsx'

const Navbar = () => {
  const [isSearching, setIsSearching] = useState(false);
  const [display, setDisplay] = useState(false);
  const searchInputRef = useRef(null);

  const setAnnouncement = () => {
    setDisplay(!display);
  };

  const searchToggle = () => {
    setIsSearching(!isSearching);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchInputRef.current && !searchInputRef.current.contains(event.target)) {
        setIsSearching(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <header className="mt-10 bg-white relative z-10">
        <div className="bg-yellow-500 h-2 w-full"></div>
        <div className="container mx-auto flex justify-between items-center py-4">
          <a href="/" className="flex items-center">
            <img src="../../public/aot-logo.jpg" alt="Academy of Technology" className="h-15 mr-2" />
          </a>
          <div className="flex-grow flex flex-col items-center">
            <h1 className="text-3xl font-bold text-center">ACADEMY OF TECHNOLOGY</h1>
            <p className="text-sm mt-1">...translate your vision into reality</p>
          </div>
          <div className="relative">
            <FaBullhorn className="text-[#000080]" onClick={setAnnouncement} style={{ fontSize: '4rem' }} />
            {display && (
              <div className="absolute top-full right-4 mt-2 w-[400px] border border-[#232C69] rounded-[20px] bg-[#232C69] z-[999]">
                <div className="heading text-white rounded-tl-[20px] rounded-tr-[20px] h-[35px] items-center justify-center">
                  <h1 className="text-center p-[5px] font-medium">Announcements</h1>
                </div>
                <div className="body bg-white pb-[30px] pt-[10px] flex flex-col items-center justify-center gap-2">
                  <ul>
                    <li className="text-center p-2 text-[#232C69]">
                      <span className="custom-underline">DKM is a good boy but KB is not</span>
                    </li>
                    <li className="text-center p-2 text-[#232C69]">
                      <span className="custom-underline">DKM is a good boy but KB is not</span>
                    </li>
                    <li className="text-center p-2 text-[#232C69]">
                      <span className="custom-underline">DKM is a good boy but KB is not</span>
                    </li>
                    <li className="text-center p-2 text-[#232C69]">
                      <span className="custom-underline">DKM is a good boy but KB is not</span>
                    </li>
                  </ul>
                  <button className="rounded-[25px] bg-[#232C69] p-[10px] text-white">see more...</button>
                </div>

                <div className="foot"></div>
              </div>
            )}
          </div>
        </div>
      </header>

      <nav className="bg-yellow-500 border-y border-gray-300">
        <div className="container mx-auto px-4 py-2 text-[#000080] text-x">
          <ul className="flex justify-between items-center">
            {['academics', 'research', 'students', 'faculty'].map((link, index) => (
              <li key={index}>
                <a href={`/${link}`} className="font-medium hover:text-gray-200 capitalize">
                  {link}
                </a>
              </li>
            ))}
            <li>
              {isSearching ? (
                <div className="flex">
                  <input
                    ref={searchInputRef}
                    type="text"
                    placeholder="Search"
                    className="px-4 py-2 rounded-l-md border-r-0 border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                  <button
                    className="bg-yellow-500 text-[#000080] px-4 py-2 rounded-r-md hover:bg-[#232c695b] focus:outline-none focus:ring-1 focus:ring-blue-500"
                    onClick={searchToggle}
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </button>
                </div>
              ) : (
                <button
                  className="bg-yellow-500 text-[#000080] px-4 py-2 rounded-md hover:bg-[#232c695b] focus:outline-none focus:ring-1 focus:ring-blue-500"
                  onClick={searchToggle}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              )}
            </li>
          </ul>
        </div>
      </nav>
      
    <Video />
        
    </>
  );
};

export default Navbar;

