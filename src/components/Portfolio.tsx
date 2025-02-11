'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import React from 'react'

import proj1 from '../assets/proj1.jpg';
import proj2 from '../assets/proj2.jpg'; 
import proj3 from '../assets/proj3.png';
import proj4 from '../assets/proj4.jpg';

const projects = [
    {
        title: "JourneyAI",
        desc: "Developed an AI-powered trip planner that generates personalized itineraries, reducing trip planning time by 40%. Integrated Gemini AI for real-time location insights and smart recommendations.",
        devstack: "React.js, Gemini AI, Firebase, TailwindCSS",
        link: "https://journey-ai-alpha.vercel.app/",
        git: "https://github.com/subbhamsingh/JourneyAI",
        src: proj1
    },
    {
        title: "MERN Boilerplate Generator (NPM Package)",
        desc: "Developed and published an NPM package that automates 100% of the setup process for MERN stack projects, reducing initial configuration time by 80%.",
        devstack: "Express.js, MongoDB, React, Node.js",
        link: "https://www.npmjs.com/package/mern-boilerplate-generator",
        git: "https://github.com/subbhamsingh/mern-boilerplate",
        src: proj2
    },
    {
        title: "Expense Tracker Analysis Tool",
        desc: "Developed a web-based expense tracker with budget reports and interactive data visualizations using Chart.js, improving financial analysis by 60%.",
        devstack: "HTML, CSS, JavaScript, Chart.js",
        link: "https://subbhamsingh.github.io/ExpenseTracker/",
        git: "https://github.com/subbhamsingh/ExpenseTracker",
        src: proj3
    },
    {
        title: "Data Structure Library",
        desc: "Developed a React-based interactive visualization tool for Stack and Queue data structures, enhancing learning by 70%.",
        devstack: "HTML, CSS, JavaScript, React.js",
        link: "https://subbhamsingh.github.io/stack-queue/",
        git: "https://github.com/subbhamsingh/stack-queue",
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
