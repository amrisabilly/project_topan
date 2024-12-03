import React from 'react'
import Navbar from "../Components/NavbarComponent"
import Kiki from "../../public/kiki.svg"
import Image from "next/image";
import Amri from "../../public/amri.svg"
import Dewa from "../../public/Dewa.svg"
import Dea from "../../public/Dea.svg"
import Saniah from "../../public/saniah.svg"
import FooterComponents from '../Components/FooterComponents';


const page = () => {
  return (
    <div className='bg-black font-geist-mono text-[#f4f4f4] w-full'>
      <Navbar />
      <div className='w-full h-[20em] flex justify-center pt-40'>
        <h1 className='text-[2em] font-extrabold'>Dev<span className='bg-red-600'>eloper</span></h1>
      </div>
      <div className='grid grid-cols-3'>
        <div className='relative h-full ps-16'>
          <Image
            src={Dea}
            alt="Dea"
            className="object-contain w-50 h-50"
          />
        </div>
        <div className='relative h-full ps-5'>
          <Image
            src={Amri}
            alt="Amri"
            className="object-contain w-50 h-50"
          />
        </div>
        <div className='relative h-full'>
          <Image
            src={Dewa}
            alt="Dewa"
            className="object-contain w-50 h-50"
          />
        </div>
      </div>
      <div className='w-full flex justify-center pt-40'>
        <h1 className='text-[2em] font-extrabold'>Lap<span className='bg-red-600'>oran</span></h1>
      </div>
      <div className='grid grid-cols-2'>
        <div className='relative h-full ps-16'>
          <Image
            src={Kiki}
            alt="Kiki"
            className="object-contain w-50 h-50"
          />
        </div>
        <div className='relative h-full ps-5'>
          <Image
            src={Saniah}
            alt="Saniah"
            className="object-contain w-50 h-50"
          />
        </div>
      </div>
      {/* Tambahkan Deskripsi Website */}
      <div className='w-full mt-16 flex justify-center bg-white py-16'>
        <div className='text-center max-w-3xl px-8'>
          <h2 className='text-[1.8em] font-extrabold text-black'>Tentang Website</h2>
          <p className='text-lg leading-8 mt-4 text-gray-700'>
            Website ini dirancang untuk menampilkan informasi dan laporan dari tim pengembang yang berdedikasi. 
            Kami menghadirkan profil tim, dokumentasi kerja, dan wawasan mendalam tentang kontribusi setiap anggota. 
            Dengan desain minimalis dan modern, kami berharap website ini menjadi inspirasi dan mencerminkan 
            kualitas terbaik dari kerja sama tim kami.
          </p>
          <p className='text-lg leading-8 mt-4 text-gray-700'>
            Nikmati eksplorasi informasi di setiap halaman, dan lihat bagaimana kami berinovasi untuk memberikan 
            dampak positif melalui proyek kami.
          </p>
          <p className='text-xl font-bold mt-6 italic text-red-600'>
            "Bersama, menciptakan masa depan yang lebih cerah."
          </p>
        </div>
      </div>
      <FooterComponents/>
    </div>
  )
}

export default page
