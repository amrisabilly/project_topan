"use client";

import { useState, useEffect } from 'react';
import Image from "next/image";
import Navbar from "../app/Components/NavbarComponent";
import Background from '../public/Efek.gif';
import Bgslice from "../public/bgslice.png";
import Bgslice1 from "../public/bgslice1.jpg";
import Filipina from "../public/Filipina.png"; 
import Mexico from "../public/Mexico.png";
import China from  "../public/china.png";
import Jepang from "../public/Jepang.png";
import Amerika from "../public/amerika serikat.png";
import { motion, useScroll, useTransform } from 'framer-motion';
import Chartbulat from "../app/Components/Chartbulat"
import Charttabel from "../app/Components/Charttabel"
import EfekBencana from "../public/efek1.jpg"
import PencarianOrang from "../app/Components/PencarianOrang"
import BgCarousel from "../public/BgCarousel.jpg"
import Carousel from "../app/Components/Carousel"
import FooterComponent from "../app/Components/FooterComponents"


export default function Home() {

  const [scrollY, setScrollY] = useState(0);
  const [isRotated, setIsRotated] = useState(false);
  const [isDetailsVisible, setIsDetailsVisible] = useState(false);

  const handleClick = () => {
    setIsRotated(!isRotated);
    setIsDetailsVisible(!isDetailsVisible);
  };
  

  
    useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);


    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const getProgress = (maxScroll: number, maxProgress: number): number => {
    return Math.min((scrollY / maxScroll) * maxProgress, maxProgress);
  };
  

  return (
    <div className="bg-black font-geist-mono text-[#f4f4f4]">
        <Navbar />
            <motion.div
              className="flex flex-col z-10 relative mb-10"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <div className="text-start text-4xl font-extrabold">
                <div className="w-[18em] mt-40 ms-10 relative z-20">
                  <h1 className="text-left">
                    Kekuatan alam paling dahsyat di bumi! dengan kecepatan bisa mencapai{" "}
                    <span className="bg-[#FD3E12]">200km/jam</span> Topan dapat
                    menghancurkan bangunan, perkebunan, dan{" "}
                    <span className="bg-[#FD3E12]">ekosistem</span> Topan juga
                    memiliki peran penting dalam menyimbangkan suhu bumi dan
                    ekosistem!
                  </h1>
                </div>
              </div>
            </motion.div>

            {/* Background image with overlay */}
            <div className="relative w-full h-[80vh] overflow-hidden">
              <Image
                src={Background}
                layout="fill"
                objectFit="cover"
                quality={100}
                alt="Background Image"
                className="bg-background"
              />
              <div className="absolute inset-0 bg-black opacity-25"></div>
              <div className="absolute top-[20em] left-10">
                <h3 className="text-2xl font-extrabold" data-aos="fade-up">
                  Pada tahun 2024, dunia menghadapi lebih dari{" "}
                  <span className="bg-[#FD3E12]">30 kasus</span> topan besar <br />
                  yang menelan korban jiwa sebanyak
                </h3>
                <h1 className="text-[150px] font-extrabold">30Cases</h1>
              </div>
            </div>


          {/* Section with typhoon names */}
            <div
              className="w-full h-[30em] flex items-center"
              data-aos="fade-up" // Tambahkan animasi fade-up
            >
              <h1 className="text-4xl font-extrabold ms-10">
                Di berbagai belahan dunia, angin topan memiliki nama berbeda! <br />
                Di Amerika disebut{" "}
                <span className="underline transition duration-200 cursor-pointer hover:text-[#FD3E12]">
                  Hurricane
                </span>
                , Di Asia disebut{" "}
                <span className="underline transition duration-200 cursor-pointer hover:text-[#FD3E12]">
                  Typhoon
                </span>
                , <br />
                Di Australia disebut{" "}
                <span className="underline transition duration-200 cursor-pointer hover:text-[#FD3E12]">
                  Cyclone.
                </span>{" "}
                <br />{" "}
              </h1>
            </div>

          {/* Image slicing grid */}
          <div className="ms-10 grid grid-cols-1 gap-6 relative" data-aos="fade-right">
              <h1 className="absolute top-[1.4em] left-[8.5em] font-extrabold text-[5em] z-10">
                Typhoon
              </h1>
            
                {/* Grid items */}
                <div
                  className="w-[70em] h-[6em] overflow-hidden relative"
                  style={{
                    backgroundImage: `url(${Bgslice.src})`,
                    backgroundPosition: "0% 0%",
                    backgroundSize: "100% 300%", // Adjust to create a seamless effect
                  }}
                >
                </div>

                <div
                  className="w-[40em] h-[6em] overflow-hidden relative"
                  style={{
                    backgroundImage: `url(${Bgslice.src})`,
                    backgroundPosition: "0% 33%",
                    backgroundSize: "100% 300%",
                  }}
                >
                </div>

                <div
                  className="w-[60em] h-[6em] overflow-hidden relative"
                  style={{
                    backgroundImage: `url(${Bgslice.src})`,
                    backgroundPosition: "0% 66%",
                    backgroundSize: "100% 300%",
                  }}
                >
                </div>
            </div>


            {/* Typhoon data with progress bars */}
              <div className="flex flex-col mb-20">
                <div className="flex ms-10 pt-40">
                  <h3 className="text-4xl font-extrabold">
                    5 Negara yang paling sering (dilanda Topan)
                  </h3>
                  <motion.button
                    className="relative bg-transparent border border-white transition duration-700 ease-in-out hover:border-red-600 px-8 py-2 text-white font-extrabold ms-9 overflow-hidden"
                    initial="rest"
                    whileHover="hover"
                    animate="rest"
                    >
                        {/* Progress background */}
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
                            originX: 0, 
                            zIndex: 1,
                          }}
                        >
                        </motion.div>

                    {/* Button text */}
                    <span className="relative z-10">Download Data</span>
                  </motion.button>
                </div>

                <div className=" mt-10">
                  <motion.div
                    className="w-full h-32 bg-[#FD3E12] container-proses flex items-center gap-5"
                    style={{ width: `${getProgress(2000, 100)}%` }} 
                  >
                    <Image
                      src={Mexico}
                      alt="Mexico"
                      className="w-16 ms-5"
                    />
                    <div className="flex justify-between w-full pe-10 items-center text-black">
                      <h1 className="font-extrabold text-[30px]">Mexico</h1>
                      <h1 className="font-extrabold text-[80px] kasus">25%</h1>
                    </div>
                  </motion.div>

                  <motion.div
                    className="w-full h-32 bg-[#FFA022] container-proses flex items-center ps-2"
                    style={{ width: `${getProgress(2400, 100)}%` }}
                  >
                    <Image
                      src={Filipina}
                      alt="Filipina"
                      className="w-20 ms-4"
                    />
                    <div className="flex justify-between w-full pe-10 items-center text-black">
                      <h1 className="font-extrabold text-[30px]">Filipina</h1>
                      <h1 className="font-extrabold text-[80px] kasus">20%</h1>
                    </div>
                  </motion.div>

                  <motion.div
                    className="w-full h-32 bg-[#FDC941] container-proses flex items-center ps-2"
                    style={{ width: `${getProgress(2800, 100)}%` }}
                  >
                    <Image
                      src={China}
                      alt="China"
                      className="w-20 ms-5"
                    />
                    <div className="flex justify-between w-full pe-10 items-center text-black">
                      <h1 className="font-extrabold text-[30px]">China</h1>
                      <h1 className="font-extrabold text-[80px] kasus">15%</h1>
                    </div>
                  </motion.div>

                  <motion.div
                    className="w-full h-32 bg-[#FDE76F] container-proses flex items-center ps-7 gap-9"
                    style={{ width: `${getProgress(3000, 100)}%` }}
                  >
                    <Image
                      src={Jepang}
                      alt="Jepang"
                      className="w-16"
                    />
                    <div className="flex justify-between w-full pe-10 items-center text-black">
                      <h1 className="font-extrabold text-[30px]">Jepang</h1>
                      <h1 className="font-extrabold text-[80px] kasus">30%</h1>
                    </div>
                  </motion.div>

                  <motion.div
                    className="w-full h-32 bg-[#FDFBB9] container-proses flex items-center ps-7 gap-9"
                    style={{ width: `${getProgress(3200, 100)}%` }}
                  >
                    <Image
                      src={Amerika}
                      alt="Amerika"
                      className="w-16"
                    />
                    <div className="flex justify-between w-full pe-10 items-center text-black">
                      <h1 className="font-extrabold text-[30px]">Amerika</h1>
                      <h1 className="font-extrabold text-[80px] kasus">10%</h1>
                    </div>
                  </motion.div>
                </div>
      </div>

      <div className='w-full ps-10 flex gap-36 mb-40'>
        <div className='w-[50em]'>
          <h3 className='text-[25px] font-extrabold mb-10' data-aos="fade-up">Number of people affected by hurricanes in 2024. Hurricanes in the world include tornadoes, hailstorms, thunderstorms, sandstorms, blizzards, and high winds. The total number of people affected is the number of people who died, needed help (injured), and were homeless.</h3>
          <h4 className='text-[18px] font-semibold' data-aos="fade-up">Jumlah orang yang terkena dampak badai pada tahun 2024. Badai di dunia meliputi tornado, hujan es, badai petir, badai pasir, badai salju, dan angin kencang. Jumlah total orang yang terkena dampak adalah jumlah orang yang meninggal, membutuhkan bantuan (terluka), dan tuna wisma.</h4>
        </div>
        <div className='container-chartjs mt-28'>
          <Chartbulat/>
        </div>
      </div>

      <div className='w-full h-[50em] ps-10 flex flex-col mb-80'>
        <div className='mb-32'>
          <h3 className='text-[40px] font-extrabold w-[30em]' data-aos="fade-up" >Total economic damages from Storms</h3>
          <h4 className='text-[18px] font-semibold' data-aos="fade-up">World Storms include tornado, hail, thunderstorm, sand storm, blizzards and extreme wind events.</h4>
        </div>
        <Charttabel/>
      </div>

      <div className='relative w-full h-[140vh] overflow-hidden'>
      <Image
          src={EfekBencana}
          layout="fill"
          objectFit="cover"
          quality={100}
          alt="Background Image"
          className="bg-background"
           data-aos="fade-up"
        />
      </div>

      <div className='relative w-full overflow-hidden bg-white '>
        
          <div className='flex flex-col mx-10 mt-32 mb-40'>
            <h3 className='text-black font-extrabold text-[20px] w-[30em] mb-10'>
            Lost Friends and Family?
            <br></br>Report to the nearest Hurricane disaster center immediately
            </h3>
              <PencarianOrang/>
          </div>
          <div className="relative w-full h-[120vh] overflow-hidden">
              <Image
              src={BgCarousel}
              layout="fill"
              objectFit="cover"
              quality={100}
              alt="Background Image"
              className="bg-background"
              // data-aos="fade-up"
            />
              <Carousel/>
          </div>

      </div>
      <FooterComponent/>
    </div>
  );
}
