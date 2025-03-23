'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import React from 'react'

import proj1 from '../assets/journey-ai.png';
import proj2 from '../assets/npm.png'; 
import proj3 from '../assets/chatapp.png';
import proj4 from '../assets/codebits.png';

const projects = [
    {
        title: "JourneyAI",
        desc: "Engineered an AI-powered trip planner that automates itinerary generation, reducing manual planning efforts by 30% using Gemini AI. Enhanced satisfaction by 25% with real-time location insights and smart recommendations.",
        devstack: "React.js, Gemini AI, Firebase, TailwindCSS",
        link: "https://journey-ai-alpha.vercel.app/",
        git: "https://github.com/subbhamsingh/JourneyAI",
        src: proj1
    },
    {
        title: "MERN Boilerplate Generator (NPM Package)",
        desc: "Developed an NPM package to automate the MERN stack project setup, reducing initial configuration time by 80%. Achieved over 100+ weekly downloads, demonstrating high developer adoption.",
        devstack: "Express.js, MongoDB, React, Node.js",
        link: "https://www.npmjs.com/package/mern-boilerplate-generator",
        git: "https://github.com/subbhamsingh/mern-boilerplate",
        src: proj2
    },
    {
        title: "Real-Time Chat Application",
        desc: "Built a real-time chat app with secure authentication and live messaging using Socket.io. Reduced message delivery time by 90% and prevented 95% of unauthorized access with JWT authentication.",
        devstack: "MERN Stack, Socket.io, Redux, JWT",
        link: "https://github.com/subbhamsingh/chat-app",
        git: "https://github.com/subbhamsingh/chat-app",
        src: proj3
    },
    {
        title: "CodeBits",
        desc: "Developed a code snippet management tool, enhancing code reusability by 40%. Optimized database performance using Prisma ORM, achieving 60% faster queries and reducing initial load time by 40%.",
        devstack: "Next.js, Prisma, TypeScript, Tailwind CSS",
        link: "https://github.com/subbhamsingh/CodeBits",
        git: "https://github.com/subbhamsingh/CodeBits",
        src: proj4
    },
]

const Portfolio = () => {
  return (
    <div className='text-white bg-gradient-to-b from-black to-[#381a5f] py-18 mt-40 px-4' id='portfolio'>
      <h1 className='text-black text-3xl sm:text-6xl max-w-[321px] mx-auto font-semibold my-12 text-center'>
        Selected <span className='text-orange-400'>Projects</span>
      </h1>

      <div className='max-w-[1200px] mx-auto space-y-24'>
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 75 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'
          >
            <div className='space-y-2 max-w-full'>
              <h2 className='text-5xl sm:text-7xl my-4 text-white/70'>{`0${index + 1}`}</h2>
              <h2 className='text-2xl sm:text-4xl'>{project.title}</h2>
              <p className='text-md sm:text-lg text-white/70 break-words p-2 sm:p-4'>{project.desc}</p>
              <p className='text-lg sm:text-xl text-orange-400 font-semibold'>{project.devstack}</p>
              <div className='w-64 h-[1px] bg-gray-400 my-4'></div>
              <div className='flex gap-4'>
                <a href={project.link} className='text-blue-400 hover:underline'>Live Demo</a>
                <a href={project.git} className='text-blue-400 hover:underline'>GitHub</a>
              </div>
            </div>
            <div className='flex justify-center'>
              <Image src={project.src} alt={project.title} className='w-full max-w-md h-auto object-cover rounded-lg shadow-lg'/>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Portfolio
