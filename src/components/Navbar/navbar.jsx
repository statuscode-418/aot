import React, { useState, useEffect } from 'react';
import MenuItem from './menuItem.jsx';
import { Menu } from '../../constants/menu';
import HamburgerMenu from './hamburger';

const Navbar = () => {
  const [isSearching, setIsSearching] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const checkScreenWidth = () => {
      setIsLargeScreen(window.innerWidth >= 768); 
    };

    checkScreenWidth();
    window.addEventListener('resize', checkScreenWidth);

    return () => {
      window.removeEventListener('resize', checkScreenWidth);
    };
  }, []);

  const toggleSearch = () => {
    setIsSearching(!isSearching);
  };

  const renderMenuItems = () => {
    if (isLargeScreen) {
      return Menu.map((item, index) => <MenuItem key={index} className='border-none' item={item} />);
    }
    return <HamburgerMenu />;
  };

  return (
    <nav className="bg-[#FFD700] ">
      <div className="container mx-auto px-4 py-2 text-[#000080] text-xl">
        <ul className="flex justify-between items-center">
          <li>
            <div className="flex justify-center space-x-10 flex-wrap">
              {renderMenuItems()}
            </div>
          </li>
          <li>
            {isSearching ? (
              <div className="flex">
                <input
                  type="text"
                  placeholder="Search"
                  className="px-4 py-2 rounded-l-md border-r-0 border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
                <button
                  className="bg-yellow-500 text-[#000080] px-4 py-2 rounded-r-md hover:bg-[#0047ab] focus:outline-none focus:ring-1 focus:ring-blue-500"
                  onClick={toggleSearch}
                  aria-label="Toggle Search"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              </div>
            ) : (
              <button
                className="bg-[#ffd700] text-[#000080] px-4 py-2 rounded-md hover:bg-[#232c695b] focus:outline-none focus:ring-1 focus:ring-blue-500"
                onClick={toggleSearch}
                aria-label="Search"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
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
