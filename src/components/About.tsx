"use client";
import React from 'react';
import Image from 'next/image';
import book from '../assets/book.png';
import pc from '../assets/pc.png';
import technical from '../assets/technical.avif';

import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.div 
      className='max-w-[1200px] mx-auto px-4 py-20 bg-gradient-to-b from-black to-[#381a5f] text-white' 
      id='about'
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 1 }}
    >
      <h1 className='text-orange-400 text-4xl md:text-6xl text-center font-semibold mb-16'>
        About <span className='text-orange-400'>Me</span>
      </h1>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-8 gap-8'>
        {/* Education Card */}
        <motion.div 
          className='lg:col-span-5 md:col-span-2 bg-white/10 backdrop-blur-lg border-white/20 rounded-xl overflow-hidden p-8'
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Image src={book} alt='Education' className='h-[100px] md:h-[130px] w-auto mx-auto mb-6' />
          <h2 className='text-2xl font-bold mb-4'>Education</h2>
          <p>B.E. in Electronics & Communication from Sir M. Visvesvaraya Institute of Technology, Bengaluru with a CGPA of 8.8/10. Completed 10th and 12th from Sant Atulanand Convent School, Varanasi, securing 91.8% and 92.2% respectively.</p>
        </motion.div>

        {/* Skills Card */}
        <motion.div 
          className='lg:col-span-3 md:col-span-2 bg-white/10 backdrop-blur-lg border-white/20 rounded-xl overflow-hidden p-8'
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <Image src={technical} alt='Skills' className='h-[100px] md:h-[130px] w-auto mx-auto mb-6' />
          <h2 className='text-2xl font-bold mb-4'>Technical Skills</h2>
          <p>Proficient in React, JavaScript, Node.js, TypeScript, SQL, Next.js, Express.js, and TailwindCSS. Experienced with MongoDB, Firebase, Prisma ORM, and tools like Git, GitHub, Postman, and Chrome DevTools.</p>
        </motion.div>

        {/* Projects Card */}
        <motion.div 
          className='lg:col-span-3 md:col-span-2 bg-white/10 backdrop-blur-lg border-white/20 rounded-xl overflow-hidden p-8'
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <Image src={pc} alt='Projects' className='h-[100px] md:h-[130px] w-auto mx-auto mb-6' />
          <h2 className='text-2xl font-bold mb-4'>Projects</h2>
          <p>Developed an AI-powered trip planner, a real-time chat app, a code snippet management tool, using React, Node.js, and MongoDB, enhancing user experience and functionality.</p>
        </motion.div>

        {/* DSA & Problem Solving Card */}
        <motion.div 
          className='lg:col-span-5 md:col-span-2 bg-white/10 backdrop-blur-lg border-white/20 rounded-xl overflow-hidden p-8'
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Image src={technical} alt='Finance' className='h-[100px] md:h-[130px] w-auto mx-auto mb-6' />
          <h2 className='text-2xl font-bold mb-4'>DSA & Problem Solving</h2>
          <p>Solved 350+ coding problems on LeetCode, enhancing algorithmic and problem-solving skills. Consistently participated in CodeChef contests, achieving a competitive rating.</p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
