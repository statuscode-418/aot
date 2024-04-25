import React, { useState } from 'react';
import { motion } from 'framer-motion';

const MenuItem = ({ item }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  // Check if the item's submenu contains "Resources"
  const hasResources = item.submenu && item.submenu.some(subItem => subItem.label === "Resources");

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
            initial={{ opacity: 0, x: 10, y: -10 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, x: 10, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute left-full top-0 mt-1 w-[200px] bg-yellow-500 shadow-md rounded-md p-2 z-10"
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
                {hasResources && item.label === "Admission" && subItem.label === "Resources" && (
                  <motion.div
                    initial={{ opacity: 0, x: 10, y: -10 }}
                    animate={{ opacity: 1, x: 0, y: 0 }}
                    exit={{ opacity: 0, x: 10, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-full top-0 mt-0 w-[200px] bg-yellow-500 shadow-md rounded-md p-2 z-10"
                    style={{ border: '1px solid #fff', marginLeft: '200px' }}
                  >
                    <div className="py-1">
                      <a
                        href="#"
                        className="text-gray-800 hover:text-blue-500 transition duration-300 ease-in-out"
                        style={{ textDecoration: 'underline' }}
                      >
                        Library
                      </a>
                    </div>
                    <div className="py-1">
                      <a
                        href="#"
                        className="text-gray-800 hover:text-blue-500 transition duration-300 ease-in-out"
                        style={{ textDecoration: 'underline' }}
                      >
                        Moodle
                      </a>
                    </div>
                  </motion.div>
                )}
              </div>
            ))}
          </motion.div>
        )}
      </button>
    </li>
  );
};

export default MenuItem;

