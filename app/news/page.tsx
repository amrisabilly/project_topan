'use client';

import React from 'react';
import Navbar from "../Components/NavbarComponent";
import Image from "next/image";
import Tornado from "../../public/tornado.jpg";
import { motion } from 'framer-motion';
import FooterComponents from '../Components/FooterComponents';


const cases = [
  {
    id: 1,
    title: "Buck Country v. BP p.I.c.",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi necessitatibus magnam sint, rem accusamus sit omnis minus ducimus consectetur quis?",
    location: "USA, 2024",
  },
  {
    id: 2,
    title: "Doe v. Shell Corp.",
    description: "Aliquid harum voluptates eveniet cumque repellendus, architecto magnam accusantium suscipit itaque!",
    location: "Netherlands, 2023",
  },
  {
    id: 3,
    title: "Greenpeace v. ExxonMobil",
    description: "Ratione, error. Fugiat similique ipsa necessitatibus molestiae sit deserunt accusantium.",
    location: "UK, 2022",
  },
  {
    id: 4,
    title: "Greenpeace v. ExxonMobil",
    description: "Ratione, error. Fugiat similique ipsa necessitatibus molestiae sit deserunt accusantium.",
    location: "UK, 2022",
  },
  {
    id: 5,
    title: "Greenpeace v. ExxonMobil",
    description: "Ratione, error. Fugiat similique ipsa necessitatibus molestiae sit deserunt accusantium.",
    location: "UK, 2022",
  },
  {
    id: 6,
    title: "Greenpeace v. ExxonMobil",
    description: "Ratione, error. Fugiat similique ipsa necessitatibus molestiae sit deserunt accusantium.",
    location: "UK, 2022",
  },
  {
    id: 7,
    title: "Greenpeace v. ExxonMobil",
    description: "Ratione, error. Fugiat similique ipsa necessitatibus molestiae sit deserunt accusantium.",
    location: "UK, 2022",
  },
  
];

const page = () => {
  return (
    <div className='bg-black font-geist-mono text-[#f4f4f4] w-full h-auto'>
      <Navbar />
      <div className='relative w-full h-[80vh] overflow-hidden'>
        <Image
          src={Tornado}
          layout="fill"
          objectFit="cover"
          quality={100}
          alt="Background Image"
          className="bg-background"
        />
        <h1 className='absolute text-white font-extrabold text-[2em] w-[30em] bottom-0 left-10'>
          Legal cases against oil and gas companies for the loss and damage suffered by communities around the world are growing.
        </h1>
      </div>
      <div className='w-full bg-white h-auto text-black px-10 py-20'>
        <div className='flex justify-between mb-20'>
          <h1 className='font-extrabold text-[3em]'>Global Cases</h1>
          <h1 className='font-extrabold text-[3em]'>{cases.length}</h1>
        </div>
        <div className='grid grid-cols-3 gap-10'>
          {cases.map((caseItem) => (
            <motion.div
              key={caseItem.id}
              className="px-5 container mb-20"
              initial="rest"
              whileHover="hover"
              animate="rest"
            >
              <hr className="border-t-2 border-red-600 mb-5" />
              <h1 className="font-extrabold text-[22px] mb-5">{caseItem.title}</h1>
              <h3 className="mb-5">{caseItem.description}</h3>
              <h3 className="text-[#999999] mb-5">{caseItem.location}</h3>
              <motion.button
                className="relative bg-transparent border border-red-600 transition duration-700 ease-in-out hover:border-red-600 px-8 py-2 text-red-600 hover:text-white font-extrabold overflow-hidden"
                variants={{
                  rest: { scale: 1 },
                  hover: { scale: 1.1 },
                }}
                transition={{
                  duration: 0.3,
                  ease: 'easeInOut',
                }}
              >
                <motion.div
                  className="absolute inset-0 bg-red-600"
                  variants={{
                    rest: { scaleX: 0 },
                    hover: { scaleX: 1 },
                  }}
                  transition={{
                    duration: 0.5,
                    ease: 'easeInOut',
                  }}
                  style={{
                    originX: 0,
                    zIndex: 1,
                  }}
                ></motion.div>
                <motion.span
                  className="relative z-10"
                  variants={{
                    rest: { color: '#FF0000' },
                    hover: { color: '#FFFFFF' },
                  }}
                  transition={{
                    duration: 0.3,
                    ease: 'easeInOut',
                  }}
                >
                  View Case
                </motion.span>
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
      <FooterComponents/>
    </div>
  );
};

export default page;
