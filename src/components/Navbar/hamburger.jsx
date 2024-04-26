import React, { useState } from 'react';
import MenuItem from './menuItem'; 
import { Menu } from '../../constants/menu';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="sm:hidden">
      <button
        className="text-gray-800 hover:text-blue-500 focus:outline-none"
        onClick={toggleMenu}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>
      {isOpen && (
        <div className="mt-2">
          {Menu.map((item, index) => (
            <MenuItem key={index} item={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;

