


"use client";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";

const navLinks = [
  { title: "About", path: "#about" },
  { title: "Portfolio", path: "#portfolio" },
  { title: "Contact", path: "#contact" },
];

const Navbar = () => {
  const [nav, setNav] = useState(false);

  return (
    <div className="fixed top-0 left-0 w-full bg-black text-white z-50 shadow-md">
      {/* Desktop Navbar */}
      <div className="hidden md:flex items-center justify-center h-16">
        <ul className="flex space-x-8">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link href={link.path}>
                <p className="cursor-pointer hover:text-orange-400">{link.title}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Toggle Button */}
      <div
        onClick={() => setNav(!nav)}
        className="md:hidden absolute top-5 right-5 border rounded border-white p-2 z-50"
      >
        {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={nav ? "open" : "closed"}
        variants={{
          open: { x: 0, transition: { stiffness: 20, damping: 15 } },
          closed: { x: "-100%", transition: { stiffness: 20, damping: 15 } },
        }}
        className="fixed left-0 top-0 w-full bg-black/90 z-40 h-screen flex items-center justify-center"
      >
        <ul className="text-4xl font-semibold text-center space-y-8">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link href={link.path} onClick={() => setNav(false)}>
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

export default Navbar;
