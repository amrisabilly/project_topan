import React from 'react'
import { TfiAlignLeft } from "react-icons/tfi";
import {navLinks} from "../Assets/Asets"
import Link from 'next/link';


const NavbarComponent = () => {
  return (
    <div className=''>
      <div className='w-full h-20 flex justify-between items-center px-10 font-geist-mono  bg-black text-white fixed z-20 border-b border-white'>
        <div className='flex gap-8 text-lg'>
          <div className='flex items-center'>
            <TfiAlignLeft color='white' size="25px"/>
            <div className='ms-4'>
              <h3 className='font-extrabold'>Topan</h3>
            </div>
          </div>
            
        </div>
        <div className='flex items-center gap-20 font-extrabold text-[#666666]'>
            <ul className='flex items-center gap-20'>
              {navLinks.map((link) => (
                <li key={link.id}>
                  <Link href={link.path}>
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
            <button className='bg-transparent border border-[#666666] px-8 py-2 text-[#666666]'>Login</button> 
        </div>
      </div>
      
    </div>
  )
}

export default NavbarComponent
