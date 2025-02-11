"use client";
import React from 'react';
import Image from 'next/image';
import book from '../assets/book.png';
import pc from '../assets/pc.png';
import card from '../assets/card.png';
import finance from '../assets/finance.png';

import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.div 
      className='max-w-[1200px] mx-auto px-4' 
      id='about'
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 1 }}
    >
      <h1 className='text-black text-4xl md:text-6xl text-center font-semibold p-4 mb-8'>
        About <span className='text-orange-400'>Me</span>
      </h1>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-8 gap-6 place-items-center'>
        
        {/* First Card - Education */}
        <motion.div 
          className='w-full lg:col-span-5 md:col-span-2 relative bg-white/10 backdrop-blur-lg border-white/20 rounded-xl overflow-hidden'
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className='absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30'></div>
          <div className='flex flex-col md:flex-row p-4 md:p-6'>
            <Image src={book} alt='Education' className='h-[100px] md:h-[130px] w-auto mx-auto md:mx-0' />
            <div className='flex flex-col mt-4 md:mt-0 md:ml-4'>
              <h2 className='text-xl md:text-2xl font-bold text-black/90'>
                Education
              </h2>
              <p className='text-md md:text-lg text-black'>
                Bachelor degree in Electronics & Communication, focusing on software development and engineering principles.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Second Card - Skills */}
        <motion.div 
          className='w-full lg:col-span-3 md:col-span-2 relative bg-white/10 backdrop-blur-lg border-white/20 rounded-xl overflow-hidden'
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className='absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30'></div>
          <div className='flex flex-col md:flex-row p-4 md:p-6'>
            <Image src={pc} alt='Skills' className='h-[100px] md:h-[130px] w-auto mx-auto md:mx-0' />
            <div className='flex flex-col mt-4 md:mt-0 md:ml-4'>
              <h2 className='text-xl md:text-2xl font-bold text-black/90'>
                Technical Skills
              </h2>
              <p className='text-md md:text-lg text-black'>
                Proficient in React, JavaScript, Node.js, TypeScript, SQL, and web frameworks like TailwindCSS.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Third Card - Projects */}
        <motion.div 
          className='w-full lg:col-span-3 md:col-span-2 relative bg-white/10 backdrop-blur-lg border-white/20 rounded-xl overflow-hidden'
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className='absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30'></div>
          <div className='flex flex-col md:flex-row p-4 md:p-6'>
            <Image src={card} alt='Projects' className='h-[100px] md:h-[130px] w-auto mx-auto md:mx-0' />
            <div className='flex flex-col mt-4 md:mt-0 md:ml-4'>
              <h2 className='text-xl md:text-2xl font-bold text-black/90'>
                Projects
              </h2>
              <p className='text-md md:text-lg text-black'>
                Built full-stack apps like habit tracker, financial calculator, and blog platform using React and Node.js.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Fourth Card - Finance */}
        <motion.div 
          className='w-full lg:col-span-5 md:col-span-2 relative bg-white/10 backdrop-blur-lg border-white/20 rounded-xl overflow-hidden'
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className='absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30'></div>
          <div className='flex flex-col md:flex-row p-4 md:p-6'>
            <Image src={finance} alt='Finance' className='h-[100px] md:h-[130px] w-auto mx-auto md:mx-0' />
            <div className='flex flex-col mt-4 md:mt-0 md:ml-4'>
              <h2 className='text-xl md:text-2xl font-bold text-black/90'>
                Financial Management
              </h2>
              <p className='text-md md:text-lg text-black'>
  Passionate about finance, I develop budgeting tools, loan repayment calculators, and investment analyzers.
</p>

            </div>
          </div>
        </motion.div>

      </div>
    </motion.div>
  );
}

export default About;
