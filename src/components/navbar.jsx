import React, { useState, useEffect, useRef } from 'react';
import { FaBullhorn } from "react-icons/fa";
import '../../public/styles/nav.css'
import videoSrc from '../../assets/aotvideo.webm'

const Navbar = () => {
  const [isSearching, setIsSearching] = useState(false);
  const [display, setDisplay] = useState(false);
  const searchInputRef = useRef(null);

  const setAnnouncement = () => {
    setDisplay(!display);
  }

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
      <header className="mt-10 bg-white">
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

                <div className="foot">

                </div>
              </div>
            )}
          </div>
        </div>
      </header>

      <div className="relative h-screen">
        <video src={videoSrc} autoPlay loop muted className="w-full h-full object-cover absolute inset-0 z-0" />
      </div>
    </>
  );
};

export default Navbar;

