import React from 'react';
import '../../public/styles/animations.css'
import { companies } from '../constants/companies';
import '../../public/styles/bg_transparent.css'
const Companies = () => {
  return (
    <div className="border border-zinc-900 border-t-2 border-b-2 mt-4 mb-4 p-4 sm:p-5 w-full overflow-hidden ">
      <ul className="flex justify-between items-center overflow-x-auto sm:overflow-visible anime space-x-20">
        {companies.map((company) => (
          <li key={company.id} className="mr-4 sm:mr-4 lg:mr-0">
            <a href={company.href} target="_blank" rel="noopener noreferrer" className="text-xl text-zinc-900 hover:text-zinc-500">
              <img src={company.img_source} alt="Company" className='w-full sm:w-64 h-auto' />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Companies;

