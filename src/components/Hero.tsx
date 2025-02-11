"use client";
import React from 'react';
import Image from 'next/image';
import cursor from "../assets/icon1.png";
import lightning from "../assets/icon2.png";

import { motion } from 'framer-motion';
import profilepic from "../assets/profilepic.png";

const Hero = () => {
  return (
    <div className='py-24 relative overflow-clip bg-[linear-gradient(to_bottom,#000,#2B1942_35%,#8F5C55_60%,#DBAF6E_80%)]'>
      <div className='absolute rounded-[50%] w-[3000px] h-[1300px] bg-[radial-gradient(closest-side,#000_80%,#2B1942)] top-[550px] left-[50%] -translate-x-1/2'>
      </div>
      <div className='relative'>
        <motion.div
          className='text-6xl md:text-8xl font-bold text-center'
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className='text-[#98B4CE]'>
            Hi, I am
          </h1>
          <h1 className='text-[#E48A57]'>
            Rajveer Singh
          </h1>
        </motion.div>

        {/* Floating Icons (Only visible on md and larger screens) */}
        <motion.div 
          className='hidden md:block absolute left-[100px] top-[50px]'
          drag
          dragConstraints={{ left: -200, right: 200, top: -200, bottom: 200 }}
          dragElastic={0.5}
          whileTap={{ scale: 1.2, rotate: 10 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          <Image src={cursor} height="170" width="170" alt="cursor" draggable="false" />
        </motion.div>

        <motion.div 
          className='hidden md:block absolute right-[100px] top-[50px]'
          drag
          dragConstraints={{ left: -200, right: 200, top: -200, bottom: 200 }}
          dragElastic={0.5}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.7 }}
        >
          <Image src={lightning} height="120" width="120" alt="cursor" draggable="false" />
        </motion.div>

        <motion.p 
          className='text-center text-lg md:text-xl max-w-[500px] mx-auto mt-10 md:mt-20 text-white/80'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          I am a web-developer focused on creating websites that provide the best experience.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 1.5 }}
        >
          <Image
            src={profilepic}
            alt="profile-picture"
            className='h-auto w-auto mx-auto'
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
