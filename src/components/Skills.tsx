

import React from 'react'
import { FaHtml5, FaCss3Alt, FaReact, FaJsSquare, FaNodeJs, FaDatabase, FaPython, FaCuttlefish } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiMongodb, SiFirebase, SiExpress, SiPostman, SiGit, SiGithub, SiSocketdotio, SiPrisma, SiShadcnui } from 'react-icons/si';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { Icon: FaCuttlefish, color: 'text-gray-400', name: 'C' },
        { Icon: FaCuttlefish, color: 'text-gray-400', name: 'C++' },
        { Icon: FaPython, color: 'text-blue-400', name: 'Python' },
        { Icon: FaJsSquare, color: 'text-yellow-400', name: 'JavaScript' },
        { Icon: SiTypescript, color: 'text-blue-600', name: 'TypeScript' },
        { Icon: FaDatabase, color: 'text-gray-400', name: 'SQL' }
      ]
    },
    {
      title: "Web Technologies & Frameworks",
      skills: [
        { Icon: FaHtml5, color: 'text-orange-500', name: 'HTML' },
        { Icon: FaCss3Alt, color: 'text-blue-500', name: 'CSS' },
        { Icon: FaReact, color: 'text-cyan-400', name: 'React' },
        { Icon: SiNextdotjs, color: 'text-white', name: 'Next.js' },
        { Icon: FaNodeJs, color: 'text-green-600', name: 'Node.js' },
        { Icon: SiExpress, color: 'text-gray-600', name: 'Express.js' },
        { Icon: SiFirebase, color: 'text-yellow-500', name: 'Firebase' },
        { Icon: SiTailwindcss, color: 'text-teal-400', name: 'Tailwind CSS' },
        { Icon: SiShadcnui, color: 'text-indigo-400', name: 'ShadCN UI' },
        { Icon: SiPrisma, color: 'text-purple-500', name: 'Prisma ORM' }
      ]
    },
    {
      title: "Developer Tools",
      skills: [
        { Icon: SiGit, color: 'text-orange-400', name: 'Git' },
        { Icon: SiGithub, color: 'text-white', name: 'GitHub' },
        { Icon: SiPostman, color: 'text-orange-500', name: 'Postman' },
        { Icon: SiSocketdotio, color: 'text-white', name: 'Socket.IO' }
      ]
    },
    {
      title: "Database & Backend",
      skills: [
        { Icon: SiMongodb, color: 'text-green-500', name: 'MongoDB' },
        { Icon: SiFirebase, color: 'text-yellow-500', name: 'Firestore' }
      ]
    }
  ];

  return (
    <div className="bg-gradient-to-b from-[#2d0b46] to-[#11001c] py-20 text-center">
      <h2 className="text-5xl font-bold text-orange-400 mb-12">My Skills</h2>

      {skillCategories.map((category, index) => (
        <div key={index} className="text-white mb-8">
          <h3 className="text-3xl font-semibold mb-4">{category.title}</h3>
          <div className="flex justify-center flex-wrap gap-8">
            {category.skills.map((skill, idx) => (
              <div key={idx} className="flex flex-col items-center group">
                <skill.Icon className={`${skill.color} text-7xl group-hover:scale-110 transition-transform duration-300`} />
                <p className="text-white/80 mt-2 text-lg">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Skills;