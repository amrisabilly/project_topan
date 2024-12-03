'use client';

import React, { useState } from 'react';
import Navbar from "../Components/NavbarComponent";
import Image from "next/image";
import Tornado from "../../public/tornado.jpg";
import { motion } from 'framer-motion';
import FooterComponents from '../Components/FooterComponents';

const cases = [
  {
    id: 1,
    title: "Buck Country v. BP p.I.c.",
    description: "Komunitas lokal menuntut BP atas kerugian akibat peningkatan intensitas badai di kawasan pesisir.",
    location: "Global",
  },
  {
    id: 2,
    title: "Doe v. Shell Corp.",
    description: "Shell digugat oleh kelompok masyarakat di Asia karena dampak buruk badai tropis yang diperparah oleh perubahan iklim.",
    location: "Asia",
  },
  {
    id: 3,
    title: "Greenpeace v. ExxonMobil",
    description: "Greenpeace menggugat ExxonMobil atas peran mereka dalam memperparah badai di kawasan Eropa.",
    location: "Eropa",
  },
  {
    id: 4,
    title: "Doe v. Chevron Corp.",
    description: "Penduduk desa di Asia menuntut Chevron atas kerusakan rumah dan ladang akibat badai siklon.",
    location: "Asia",
  },
  {
    id: 5,
    title: "Sierra Club v. ConocoPhillips",
    description: "Organisasi lingkungan menuntut ConocoPhillips terkait banjir besar yang disebabkan oleh badai di kawasan Global.",
    location: "Global",
  },
  {
    id: 6,
    title: "Climate Justice v. Statoil",
    description: "Climate Justice menggugat Statoil atas kerugian akibat badai salju ekstrem di Eropa.",
    location: "Eropa",
  },
  {
    id: 7,
    title: "People v. Oil Corporation",
    description: "Komunitas Asia menggugat perusahaan minyak atas kerusakan akibat angin topan.",
    location: "Asia",
  },
  {
    id: 8,
    title: "Hurricane Victims v. PetroChina",
    description: "Para korban badai di Asia menggugat PetroChina atas kerugian properti dan hilangnya penghasilan.",
    location: "Asia",
  },
  {
    id: 9,
    title: "Cyclone Survivors v. TotalEnergies",
    description: "Kelompok penyintas badai di Afrika menggugat TotalEnergies karena kontribusi mereka terhadap perubahan iklim.",
    location: "Global",
  },
  {
    id: 10,
    title: "Typhoon Communities v. Chevron",
    description: "Komunitas pesisir di Filipina menggugat Chevron atas dampak buruk topan yang menghancurkan infrastruktur mereka.",
    location: "Asia",
  },
  {
    id: 11,
    title: "Storm Victims v. BP",
    description: "Penduduk lokal di Eropa menggugat BP atas kerugian akibat badai angin besar.",
    location: "Eropa",
  },
  {
    id: 12,
    title: "Hurricane Relief v. ExxonMobil",
    description: "ExxonMobil dituntut oleh organisasi bantuan badai atas kerugian finansial setelah serangkaian badai besar.",
    location: "Global",
  },
  {
    id: 13,
    title: "Typhoon Survivors v. Shell",
    description: "Korban topan di Asia menuntut Shell atas kerusakan yang disebabkan oleh perubahan iklim.",
    location: "Asia",
  },
  {
    id: 14,
    title: "Badai Komunitas v. Total",
    description: "Penduduk Eropa menggugat Total atas kerusakan akibat badai ekstrem di kawasan mereka.",
    location: "Eropa",
  },
  {
    id: 15,
    title: "Cyclone Victims v. Oil Giants",
    description: "Para korban badai global menggugat berbagai perusahaan minyak karena memperparah krisis iklim.",
    location: "Global",
  },
  {
    id: 16,
    title: "Survivors v. GasCorp",
    description: "Masyarakat lokal di kawasan Asia menggugat GasCorp atas intensitas badai yang merusak mata pencaharian mereka.",
    location: "Asia",
  },
  {
    id: 17,
    title: "Environmental Advocates v. BigOil Inc.",
    description: "Kelompok lingkungan menggugat BigOil Inc. karena kerusakan lingkungan akibat perubahan iklim.",
    location: "Global",
  },
  {
    id: 18,
    title: "Fishermen v. EnergyCorp",
    description: "Nelayan di kawasan pesisir Eropa menuntut EnergyCorp karena dampak badai yang menghancurkan industri perikanan.",
    location: "Eropa",
  },
  {
    id: 19,
    title: "Island Nations v. FossilFuelCo",
    description: "Negara-negara kepulauan di Asia menggugat FossilFuelCo atas kenaikan permukaan laut dan badai.",
    location: "Asia",
  },
  {
    id: 20,
    title: "Villagers v. GlobalOil",
    description: "Warga desa di Afrika menggugat GlobalOil atas kerugian akibat badai tropis yang meningkat.",
    location: "Global",
  },

];

const page = () => {
  const [filteredCases, setFilteredCases] = useState(cases);
  const [activeFilter, setActiveFilter] = useState("Global");
  const [visibleCount, setVisibleCount] = useState(6); // Mulai dengan 6 kasus
  const [isRotated, setIsRotated] = useState(false); // Untuk memutar tombol

  // Handle Filter
  const handleFilter = (location: "Global" | "Asia" | "Eropa") => {
    setActiveFilter(location);
    if (location === "Global") {
      setFilteredCases(cases);
    } else {
      const filtered = cases.filter((caseItem) => caseItem.location === location);
      setFilteredCases(filtered);
    }
    setVisibleCount(6); // Reset jumlah terlihat saat filter berubah
  };

  // Handle Show More / Putar Tombol
  const handleClick = () => {
    setIsRotated(!isRotated); // Toggle status rotasi
    setVisibleCount((prev) => prev + 6); // Tambahkan 6 kasus
  };

  // Kasus yang akan ditampilkan
  const displayedCases = filteredCases.slice(0, visibleCount);

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
        <h1 className='absolute text-white font-extrabold text-[2em] w-[30em] bottom-0 left-10' data-aos="fade-up">
          Legal cases against oil and gas companies for the loss and damage suffered by communities around the world are growing.
        </h1>
      </div>
      <div className='w-full bg-white h-auto text-black px-10 py-20'>
        <div className='flex justify-between mb-20' data-aos="fade-up">
          <h1 className='font-extrabold text-[3em]'>Global Cases</h1>
          <h1 className='font-extrabold text-[3em]'>{filteredCases.length}</h1>
        </div>

        {/* Filter Cases */}
        <div className='flex mb-10 items-center gap-5' data-aos="fade-up">
          <h3 className='text-[#B2B2B2]'>Filter : </h3>
          <button
            className={`px-3 py-1 font-extrabold ${activeFilter === "Global" ? "bg-red-600 text-white" : "bg-slate-200"}`}
            onClick={() => handleFilter("Global")}
          >
            Global
          </button>
          <button
            className={`px-3 py-1 font-extrabold ${activeFilter === "Asia" ? "bg-red-600 text-white" : "bg-slate-200"}`}
            onClick={() => handleFilter("Asia")}
          >
            Asia
          </button>
          <button
            className={`px-3 py-1 font-extrabold ${activeFilter === "Eropa" ? "bg-red-600 text-white" : "bg-slate-200"}`}
            onClick={() => handleFilter("Eropa")}
          >
            Eropa
          </button>
        </div>

        {/* Cases List */}
        <div className='grid grid-cols-3 gap-10'>
          {displayedCases.map((caseItem) => (
            <motion.div
              key={caseItem.id}
              className="px-5 container mb-20"
              initial="rest"
              whileHover="hover"
              animate="rest"
            >
              <hr className="border-t-2 border-red-600 mb-5" data-aos="fade-up"/>
              <h1 className="font-extrabold text-[22px] mb-5" data-aos="fade-up">{caseItem.title}</h1>
              <h3 className="mb-5" data-aos="fade-up">{caseItem.description}</h3>
              <h3 className="text-[#999999] mb-5" data-aos="fade-up">{caseItem.location}</h3>
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

        {/* Tombol Putar untuk Show More */}
        {visibleCount < filteredCases.length && (
          <div className="flex mt-10 items-center gap-6">
            <h3 className='text-4xl font-extrabold'>Show More</h3>
            <div
              className={`rounded-full w-12 h-12 bg-[#FD3E12] flex items-center justify-center cursor-pointer transition-transform duration-500 ${isRotated ? 'rotate-180' : ''}`}
              onClick={handleClick}
            >
              <h1 className="text-white text-[50px]">+</h1>
            </div>
          </div>
        )}
      </div>
      <FooterComponents />
    </div>
  );
};

export default page;
