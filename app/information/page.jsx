'use client';

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from "../Components/NavbarComponent";
import Image from "next/image";
import Bencana from "../../public/bencana.jpg";
import FooterComponents from '../Components/FooterComponents';

const page = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Durasi animasi dalam milidetik
      easing: 'ease-in-out', // Efek easing
      once: true, // Animasi hanya dijalankan sekali
      mirror: false, // Animasi tidak berjalan saat di-scroll kembali
    });
    AOS.refresh(); // Segarkan AOS saat halaman di-load
  }, []);

  return (
    <div className="bg-white font-geist-mono text-[#f4f4f4] w-full min-h-screen overflow-x-hidden">
      <Navbar />
      <div className="bg-black w-full h-[20em] pt-[8em] ps-10">
        <h1
          className="font-extrabold text-[30px] text-[#f4f4f4] w-[25em]"
          data-aos="fade-up"
        >
          Countries who’ve done the least to cause the climate crisis are{' '}
          <span className="bg-red-600">affected most by its impacts.</span>
        </h1>
      </div>

      <div className="text-black h-[40em] grid grid-cols-2 mb-20">
        {/* Kolom 1 */}
        <div className="h-full relative" data-aos="fade-right">
          <div className="absolute bottom-0 left-0 p-5">
            <h1 className="font-extrabold text-[30px] mb-3">
              Sea levels rising, sustained heatwaves, increasingly severe bushfires, drought, hurricanes, and species extinction.
            </h1>
            <h3>
              As global warming worsens, the negative impacts of climate damages will increase in frequency and severity. Developing countries are more vulnerable to the worst impacts of climate change and are less likely to have the resources to adequately respond or adapt. Yet they have contributed the least to the climate crisis.
            </h3>
          </div>
        </div>

        {/* Kolom 2 */}
        <div className="relative h-full mt-7" data-aos="fade-left">
          <Image
            src={Bencana}
            width={300}
            height={300}
            alt="Background Image"
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      <div className="text-black h-[40em] grid grid-cols-2 mb-[10em]">
        {/* Kolom 2 */}
        <div className="relative h-full mt-7" data-aos="fade-left">
          <Image
            src={Bencana}
            width={300}
            height={300}
            alt="Background Image"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Kolom 1 */}
        <div className="h-full relative" data-aos="fade-right">
          <div className="absolute bottom-0 left-0 p-5">
            <h1 className="font-extrabold text-[30px] mb-3">
              Sea levels rising, sustained heatwaves, increasingly severe bushfires, drought, hurricanes, and species extinction.
            </h1>
            <h3>
              As global warming worsens, the negative impacts of climate damages will increase in frequency and severity. Developing countries are more vulnerable to the worst impacts of climate change and are less likely to have the resources to adequately respond or adapt. Yet they have contributed the least to the climate crisis.
            </h3>
          </div>
        </div>
      </div>

      <FooterComponents />
    </div>
  );
};

export default page;
