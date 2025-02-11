import React from 'react';
import { FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

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
          <a href="#" target="_blank" rel="noopener noreferrer" 
             className="hover:text-blue-300 transition-all duration-300">
            <FaTwitter size={26} />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" 
             className="hover:text-pink-400 transition-all duration-300">
            <FaInstagram size={26} />
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
