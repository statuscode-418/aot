import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBullhorn } from 'react-icons/fa'; // Import FaBullhorn icon
import { Menu } from '../constants/menu';

const Navbar = () => {
  const [isSearching, setIsSearching] = useState(false);
  const [displayAnnouncement, setDisplayAnnouncement] = useState(false);

  const toggleAnnouncement = () => {
    setDisplayAnnouncement(!displayAnnouncement);
  };

  const toggleSearch = () => {
    setIsSearching(!isSearching);
  };

  const MenuItem = ({ item }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleHover = () => {
      setIsHovered(!isHovered);
    };

    return (
      <li>
        <button
          onMouseEnter={handleHover}
          onMouseLeave={handleHover}
          className="cursor-pointer hover:bg-gray-200 focus:outline-none px-4 py-2 rounded-md relative"
        >
          {item.label}
          {item.submenu && isHovered && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute left-0 top-full mt-1 w-[200px] bg-yellow-500 shadow-md rounded-md p-2 z-10"
              style={{ border: '1px solid #fff' }}
            >
              {item.submenu.map((subItem, index) => (
                <div key={index} className="py-1">
                  <a
                    href={subItem.link}
                    className="text-gray-800 hover:text-blue-500 transition duration-300 ease-in-out"
                    style={{ textDecoration: 'underline' }}
                  >
                    {subItem.label}
                  </a>
                  {subItem.submenu && subItem.submenu.length > 0 && ( // Check if submenu exists and has items
                    <MenuItem key={subItem.label} item={subItem} /> // Render MenuItem recursively
                  )}
                </div>
              ))}
            </motion.div>
          )}
        </button>
      </li>
    );
  };

  const renderMenuItems = (items) => {
    return items.map((item, index) => (
      <MenuItem key={item.label} item={item} />
    ));
  };

  return (
    <>
      {/* Header */}
      <header className="mt-10 bg-white relative z-10">
        <div className="bg-yellow-500 h-2 w-full"></div>
        <div className="container mx-auto flex justify-between items-center py-4">
          <a href="/" className="flex items-center">
            <img src="/aot-logo.jpg" alt="Academy of Technology" className="h-15 mr-2" /> {/* Adjust image path */}
          </a>
          <div className="flex-grow flex flex-col items-center">
            <h1 className="text-3xl font-bold text-center">ACADEMY OF TECHNOLOGY</h1>
            <p className="text-sm mt-1">...translate your vision into reality</p>
          </div>
          <div className="relative">
            <FaBullhorn className="text-[#000080]" onClick={toggleAnnouncement} style={{ fontSize: '4rem' }} />
            {displayAnnouncement && (
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
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Navbar */}
      <nav className="bg-yellow-500 border-y border-gray-300">
        <div className="container mx-auto px-4 py-2 text-[#000080] text-x">
          <ul className="flex justify-between items-center">
            {renderMenuItems(Menu)}
            <li>
              {isSearching ? (
                <div className="flex">
                  <input
                    type="text"
                    placeholder="Search"
                    className="px-4 py-2 rounded-l-md border-r-0 border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                  <button
                    className="bg-yellow-500 text-[#000080] px-4 py-2 rounded-r-md hover:bg-[#232c695b] focus:outline-none focus:ring-1 focus:ring-blue-500"
                    onClick={toggleSearch}
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </button>
                </div>
              ) : (
                <button
                  className="bg-yellow-500 text-[#000080] px-4 py-2 rounded-md hover:bg-[#232c695b] focus:outline-none focus:ring-1 focus:ring-blue-500"
                  onClick={toggleSearch}
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              )}
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

