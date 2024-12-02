import React from 'react'
import Navbar from "../Components/NavbarComponent"
import Image from "next/image";
import BgOrang from "../../public/bgorang.jpg"

const page = () => {
  return (
    <div className='bg-black font-geist-mono text-[#f4f4f4] w-full h-[100em]'>
      <Navbar/>
      <div className='w-full h-[20em]'>
        <h1 className='font-bold text-[2em] w-[30em] absolute mt-28 ms-10'>
          Communities around the world are demanding justice, <span className='bg-red-600'>unleashing legal action against fossil fuel giants.</span> 
        </h1>
        </div>
      <div className='relative w-full h-[120vh] overflow-hidden'>
            <Image
                src={BgOrang}
                layout="fill"
                objectFit="cover"
                quality={100}
                alt="Background Image"
                className="bg-background"
                // data-aos="fade-up"
              />
              <h1 className='absolute text-white font-extrabold text-[2em] w-[30em] bottom-0 left-10'>Legal cases against oil and gas companies for the loss and damage suffered by communities around the world are growing.</h1>
      </div>
      <div className='w-full bg-white h-[30em] text-black'>
        <div className='flex justify-between px-12'>
          <h1 className='font-extrabold text-[3em]'>Global Cases</h1>
          <h1>54</h1>
        </div>
      </div>
    </div>
  )
}

export default page
