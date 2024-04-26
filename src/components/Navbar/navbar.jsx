// Navbar.js
import React, { useState, useEffect } from 'react';
import MenuItem from './menuItem.jsx'; // Importing the MenuItem component
import { Menu } from '../../constants/menu';
import HamburgerMenu from './hamburger';

const Navbar = () => {
  const [isSearching, setIsSearching] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const checkScreenWidth = () => {
      setIsSmallScreen(window.innerWidth <= 768); // Adjust the threshold as needed
    };

    checkScreenWidth(); // Check screen width on initial render

    window.addEventListener('resize', checkScreenWidth); // Listen for window resize events

    return () => {
      window.removeEventListener('resize', checkScreenWidth); // Clean up event listener on component unmount
    };
  }, []);

  const toggleSearch = () => {
    setIsSearching(!isSearching);
  };

  const renderMenuItems = (items) => {
    if (isSmallScreen) {
      return null; // Don't render menu items on small screens
    }
    return items.map((item, index) => (
      <MenuItem key={index} item={item} />
    ));
  };

  return (
    <nav className="bg-yellow-500 border-y border-gray-300">
      <div className="container mx-auto px-4 py-2 text-[#000080] text-x">
        <ul className="flex justify-between items-center">
          {isSmallScreen && <HamburgerMenu />} {/* Render HamburgerMenu for smaller devices */}
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
  );
};

export default Navbar;

