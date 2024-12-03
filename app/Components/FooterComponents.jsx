import React from 'react'

const FooterComponents = () => {
  return (
    <div className='bg-black w-full h-[20em] text-[#666666] grid grid-cols-3'>
        <div className='px-10 py-10'>
            <h1 className='text-[#FD3E12] text-lg font-semibold mb-5'>Cyclone Shield</h1>
            <h3>Is a leading disaster response company specializing in providing innovative solutions and advanced technology to protect communities from the devastating impacts of cyclones and typhoons.
            </h3>
        </div>
        <div className='px-10 py-10'>
        <div className="space-y-4">
                <h3 className="text-lg font-semibold text-[#FD3E12]">Quick Links</h3>
                <ul className="text-sm text-gray-400 space-y-2">
                  <li><a href="#about" className="hover:text-white">About Us</a></li>
                  <li><a href="#services" className="hover:text-white">Services</a></li>
                  <li><a href="#careers" className="hover:text-white">Careers</a></li>
                  <li><a href="#contact" className="hover:text-white">Contact Us</a></li>
                </ul>
              </div>
        </div>
        <div className='px-10 py-10'>
        <div className="space-y-4">
              <h3 className="text-lg font-semibold text-[#FD3E12]">Contact</h3>
              <p className="text-sm text-gray-400">
                Email: <a href="mailto:info@yourcompany.com" className="hover:text-white">info@cycloneshield.com</a>
              </p>
              <p className="text-sm text-gray-400">Phone: +1 234 567 890</p>
              <p className="text-sm text-gray-400">Address: 123 Innovation Street, Tech City</p>
              <div className="bg-[#0F0F0F] py-4 text-center text-sm text-gray-500">
            <p>&copy; {new Date().getFullYear()} Cyclone Shield. All rights reserved.</p>
          </div>
        </div>
        </div>
    </div>
  )
}

export default FooterComponents
