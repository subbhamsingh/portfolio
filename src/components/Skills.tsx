import React from 'react'
import { FaHtml5, FaCss3Alt, FaReact, FaJsSquare } from 'react-icons/fa';

const Skills = () => {
  return (
    <div className="bg-gradient-to-b from-[#2d0b46] to-[#11001c] py-20 text-center">
      <h2 className="text-5xl font-bold text-white mb-12">What I Do</h2>

      {/* Glassmorphic Card */}
      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 max-w-2xl mx-auto flex justify-around items-center shadow-xl">
        
        {/* Skill Cards */}
        <div className="flex flex-col items-center group">
          <FaHtml5 className="text-orange-500 text-7xl group-hover:scale-110 transition-transform duration-300" />
          <p className="text-white/80 mt-2 text-lg">HTML</p>
        </div>

        <div className="flex flex-col items-center group">
          <FaCss3Alt className="text-blue-500 text-7xl group-hover:scale-110 transition-transform duration-300" />
          <p className="text-white/80 mt-2 text-lg">CSS</p>
        </div>

        <div className="flex flex-col items-center group">
          <FaReact className="text-cyan-400 text-7xl group-hover:scale-110 transition-transform duration-300" />
          <p className="text-white/80 mt-2 text-lg">React</p>
        </div>

        <div className="flex flex-col items-center group">
          <FaJsSquare className="text-yellow-400 text-7xl group-hover:scale-110 transition-transform duration-300" />
          <p className="text-white/80 mt-2 text-lg">JavaScript</p>
        </div>


        

      </div>
    </div>
  );
}

export default Skills;
