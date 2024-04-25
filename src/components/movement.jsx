import React from 'react';
import { links } from '../constants/links';
import '../../public/styles/animations.css';

const Movement = () => {
  return (
    <div className="border border-zinc-900 border-t-2 border-b-2 mt-4 mb-4 p-4 w-full overflow-hidden">
      <div className="marquee">
        <div className="marquee-content">
          {links.map((link) => (
            <a key={link.title} href={link.href} className="text-xl text-zinc-900 hover:text-zinc-500">
              {link.title} <span>--:--</span> 
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Movement;

