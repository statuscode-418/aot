import React from 'react';
import '../../public/styles/animations.css'
import { companies } from '../constants/companies';
import '../../public/styles/bg_transparent.css'
import { motion } from 'framer-motion';

const Companies = () => {
  return (
    <div className="border border-zinc-900 border-t-2 border-b-2 mt-2 mb-4 p-4 sm:p-3 w-full overflow-hidden ">
      <div className="marquee">
        <ul className="marquee-content">
          {companies.map((company, index) => (
            <li key={index} className="mr4 sm:mr-4 lg:mr-0">
              <a href={company.href} target="_blank" rel="noopener noreferrer" className="text-xl text-zinc-900 hover:text-zinc-500">
                <motion.img 
                  src={company.img_source} 
                  alt="Company" 
                  whileHover={{ scale: 1.1 }} 
                  transition={{ duration: 0.5 }}
                />
              </a>
            </li>
          ))}
          {companies.map((company, index) => (
            <li key={index + companies.length} className="mr4 sm:mr-4 lg:mr-0">
              <a href={company.href} target="_blank" rel="noopener noreferrer" className="text-xl text-zinc-900 hover:text-zinc-500">
                <img src={company.img_source} alt="Company" className='w-full sm:w-64 h-auto' />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Companies;