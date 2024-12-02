"use client";

import React, { useState, useEffect } from 'react';
import { AiOutlineAlignLeft } from "react-icons/ai";
import { navLinks } from "../Assets/Asets";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, useScroll, useTransform } from 'framer-motion';

const NavbarComponent = () => {
  const [scrollDirection, setScrollDirection] = useState("up");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isNavbarActive, setIsNavbarActive] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const toggleNavbarBackground = () => {
    setIsNavbarActive(!isNavbarActive);
  };

  return (
    <div>
      <div
        className={`w-full h-20 flex justify-between items-center px-10 font-geist-mono fixed z-20  transition-transform duration-300
          ${scrollDirection === "down" ? "-translate-y-full" : "translate-y-0"}
          ${isNavbarActive ? "bg-red-600" : "bg-black text-white"}`}
      >
        <div className='flex gap-8 text-lg'>
          <div
            className='flex items-center cursor-pointer'
            onClick={toggleNavbarBackground}
          >
            <AiOutlineAlignLeft
              size="36px"
              className='text-white transition-colors duration-300 hover:text-red-600'
            />
            <div className='ms-4'>
              <h3 className='text-[28px] font-extrabold'>Topan</h3>
            </div>
          </div>
        </div>
        <div className='flex items-center gap-20 font-extrabold text-[#666666] capitalize'>
          <ul className='flex items-center gap-20'>
            {navLinks.map((link) => (
              <li key={link.id}>
                <Link
                  href={link.path}
                  className={`${
                    pathname === link.path ? 'text-[#f4f4f4]' : 'text-[#666666] transition duration-300 ease-in-out hover:text-[#f4f4f4]'
                  }`}
                >
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
          <motion.button
                    className="relative bg-transparent border border-white transition duration-700 ease-in-out hover:border-red-600 px-8 py-2 text-white font-extrabold ms-9 overflow-hidden"
                    initial="rest"
                    whileHover="hover"
                    animate="rest"
                    >
                        <motion.div
                          className="absolute inset-0 bg-red-600"
                          variants={{
                            rest: { scaleX: 0 },
                            hover: { scaleX: 1 },
                          }}
                          transition={{
                            duration: 0.5,
                            ease: "easeInOut",
                          }}
                          style={{
                            originX: 0, // Animate from left to right
                            zIndex: 1,
                          }}
                        >
                        </motion.div>

                    <span className="relative z-10">Login</span>
                  </motion.button>
        </div>
      </div>
    </div>
  );
}

export default NavbarComponent;
