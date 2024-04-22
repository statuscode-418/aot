import React from 'react';
import {links} from '../constants/links'
import '../../public/styles/animations.css'
import { companies } from '../constants/companies';
import '../../public/styles/bg_transparent.css'
const Companies = () => {
  return (
    <div className="border border-zinc-900 border-t-2 border-b-2 mt-4 mb-4 p-4 w-full overflow-hidden ">
      <ul className="flex justify-between items-center anime mix-blend-multiply ">
        {companies.map((company) => (
          <li key={company.id} >
            <a href={company.href} className="text-xl text-zinc-900 hover:text-zinc-500">
              <img src={company.img_link} alt="Company" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Companies;

