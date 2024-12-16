import React from 'react'

const FooterComponents = () => {
  return (
    <div>
    <div className='bg-black w-full h-[16em] text-[#666666] grid grid-cols-3 '>
        
        <div className='px-10 py-10'>
            <h1 className='text-[#FD3E12] text-lg font-semibold mb-5'>GeoTyphoon</h1>
            <h3>Merupakan website tanggap bencana terkemuka yang mengkhususkan diri dalam menyediakan solusi inovatif dan teknologi canggih untuk melindungi masyarakat dari dampak dahsyat siklon dan topan.
            </h3>
        </div>
        <div className='flex justify-center py-10'>
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
                Email: <a href="mailto:info@yourcompany.com" className="hover:text-white">GeoTyphoon@gmail.com</a>
              </p>
              <p className="text-sm text-gray-400">Phone: +62 857 2944 7324</p>
              <p className="text-sm text-gray-400">Address: Seturan, Yogyakarta</p>
        </div>
        </div>
        
        
    </div>
    <div className="bg-[#0F0F0F] py-4 text-center text-sm text-gray-500 ">
            <p>&copy; {new Date().getFullYear()} GeoTyphoon. by kelompok 7.</p>
        </div>
        
    </div>
  )
}

export default FooterComponents
