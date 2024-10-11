"use client";

import { useState } from 'react';
import { NAV_LINKS } from '@/constant';
import Image from "next/image";

const ClientDropdown = () => {
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
	let timeoutId : ReturnType<typeof setTimeout>;
  
	const handleMouseEnter = () => {
	  clearTimeout(timeoutId);
	  setIsDropdownOpen(true);
	};
  
	const handleMouseLeave = () => {
	  timeoutId = setTimeout(() => {
		setIsDropdownOpen(false);
	  }, 200);
	};

  return (
    <div
		onMouseEnter={handleMouseEnter} 
		onMouseLeave={handleMouseLeave} 
		className="relative"
	>
      <Image
        src="/menu.png"
        alt="menu"
        width={32}
        height={32}
		aria-expanded={isDropdownOpen}
      />
      <div id="dropdownHover" className={`absolute top-12 right-0 z-10 w-40 bg-green-900 rounded-lg shadow dark:bg-gray-700 transition-all duration-300 ease-in-out ${isDropdownOpen ? 'block' : 'hidden'}`}>
        <ul className="py-2 text-sm text-gray-200" aria-labelledby="dropdownHoverButton ">
          {NAV_LINKS.map((link) => (
            <li key={link.key}>
              <a href={link.href} className="block px-4 py-2 hover:bg-slate-400 hover:bg-opacity-50 rounded-xl transition-all duration-300 transform hover:scale-95">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ClientDropdown;
