"use client";
import React from 'react';

const Resume = () => {
  return (
    <section id="resume" className="bg-gradient-to-b from-[#2d0b46] to-[#11001c] py-20 text-white text-center">
      <h2 className="text-orange-400 text-5xl  mb-12">Resume & Important Links</h2>
      
      {/* Resume Download and View Buttons */}
      <div className="mb-8">
        <a href="/rajveer.pdf" download className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg mr-4">Download Resume</a>
        <a href="/rajveer.pdf" target="_blank" className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-6 rounded-lg">View Resume</a>
      </div>

      {/* Important Links */}
      <div className="flex justify-center gap-6 mb-8">
        <a href="https://github.com/subbhamsingh" target="_blank" className="text-blue-400 hover:underline text-xl">GitHub</a>
        <a href="https://www.linkedin.com/in/rajveer-singh-2b123122a/" target="_blank" className="text-blue-400 hover:underline text-xl">LinkedIn</a>
        <a href="https://leetcode.com/u/rajveersinghvns2021/" target="_blank" className="text-blue-400 hover:underline text-xl">LeetCode</a>
        <a href="https://www.npmjs.com/package/mern-boilerplate-generator" target="_blank" className="text-blue-400 hover:underline text-xl">NPM Package</a>
        <a href="https://www.codechef.com/users/rajveersingh40" target="_blank" className="text-blue-400 hover:underline text-xl">CodeChef</a>
      </div>

      {/* Project Video Section */}
      <h3 className="text-3xl font-bold mb-6">Project Demos</h3>
      
      {/* First Video */}
      <div className="mb-8">
        <h4 className="text-xl font-semibold mb-4">Chat App Demo</h4>
        <video controls className="w-full max-w-lg mx-auto">
          <source src="/chat app.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Second Video */}
      <div>
        <h4 className="text-xl font-semibold mb-4">Journey AI Demo</h4>
        <video controls className="w-full max-w-lg mx-auto">
          <source src="/journey ai.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
};

export default Resume;
