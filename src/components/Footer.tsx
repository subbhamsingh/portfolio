import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiLeetcode, SiCodechef } from 'react-icons/si';

const Footer = () => {
  return (
    <footer className="bg-black/90 text-white/80 py-6 border-t border-gray-700">
      <div className="max-w-[1000px] mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        
        {/* Name */}
        <h1 className="text-2xl font-bold text-white">Rajveer Singh</h1>

        {/* Social Icons */}
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="https://www.linkedin.com/in/rajveer-singh-2b123122a/" target="_blank" rel="noopener noreferrer" 
             className="hover:text-blue-400 transition-all duration-300">
            <FaLinkedin size={26} />
          </a>
          <a href="https://leetcode.com/u/rajveersinghvns2021/" target="_blank" rel="noopener noreferrer" 
             className="hover:text-yellow-400 transition-all duration-300">
            <SiLeetcode size={26} />
          </a>
          <a href="https://github.com/subbhamsingh" target="_blank" rel="noopener noreferrer" 
             className="hover:text-gray-400 transition-all duration-300">
            <FaGithub size={26} />
          </a>
          <a href="https://www.codechef.com/users/rajveersingh40" target="_blank" rel="noopener noreferrer" 
             className="hover:text-purple-400 transition-all duration-300">
            <SiCodechef size={26} />
          </a>
        </div>

      </div>

      {/* Copyright */}
      <div className="text-center text-white/60 text-sm mt-4">
        © {new Date().getFullYear()} Rajveer Singh. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
