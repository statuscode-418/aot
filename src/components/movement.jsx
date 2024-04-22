import React from 'react';
import {links} from '../constants/links'
import '../../public/styles/animations.css'
const Movement = () => {
  return (
    <div className="border border-zinc-900 border-t-2 border-b-2 mt-4 mb-4 p-4 w-full overflow-hidden">
      <ul className="flex justify-between items-center anime ">
        {links.map((link) => (
          <li key={link.id}>
            <a href={link.href} className="text-xl text-zinc-900 hover:text-zinc-500">
              {link.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Movement;

