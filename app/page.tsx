import Image from "next/image";
import Navbar from "../app/Components/NavbarComponent";
import Background from '../public/Efek.gif';

export default function Home() {
  return (
    <div className="bg-black font-geist-mono text-white">
      <Navbar />


      <div className="flex flex-col z-10 relative mb-10">
        <div className="text-start text-4xl font-extrabold">
          <div className="w-[18em] mt-40 ms-10 relative z-20">
            <h1 className="text-justify">Kekuatan alam paling dahsyat di bumi! dengan kecepatan bisa mencapai <span className="bg-[#FD3E12]">>200km/jam</span> Topan dapat menghancurkan bangunan, perkebunan, dan  <span className="bg-[#FD3E12]">ekosistem</span> Topan juga memiliki peran penting dalam menyimbangkan suhu bumi dan ekosistem!</h1>
          </div>
        </div>
      </div>


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
          <h3 className="text-2xl font-extrabold">Pada tahun 2024, dunia menghadapi lebih dari <span className="bg-[#FD3E12]">30 kasus</span> topan besar <br></br>yang menelan korban jiwa sebanyak</h3>
          <h1 className="text-[150px] font-extrabold">100Million</h1>
        </div>
      </div>

      <div className="w-full h-[30em] flex items-center">
          <h1 className="text-4xl font-extrabold ms-10">Di berbagai belahan dunia, angin topan memiliki nama berbeda! <br></br>Di Amerika disebut <span className="underline transition duration-200 cursor-pointer hover:text-[#FD3E12]">Hurricane</span>, Di Asia disebut <span className="underline transition duration-200 cursor-pointer hover:text-[#FD3E12]">Typhoon</span>, <br></br>Di Australia disebut <span className="underline transition duration-200 cursor-pointer hover:text-[#FD3E12]">Cyclone.</span> <br /> </h1>
      </div>

      <div className="w-full flex h-[20em] ps-10 relative">
        <div className="flex flex-col space-y-8">
          <div className="w-[70em] h-20 bg-white"></div>
          <div className="w-[30em] h-20 bg-white"></div>
          <div className="w-[50em] h-20 bg-white"></div>
        </div>
        <span className="text-white font-bold text-6xl absolute top-[2em] left-[9em]">Huccricane</span>
      </div>

      <div className="flex flex-col mb-20">
          <div className="flex ms-10 pt-40">
            <h3 className="text-4xl font-extrabold">5 Negara yang paling sering dilanda Topan</h3>
            <button className="bg-transparent border border-[#666666] px-8 py-2 text-[#666666]">Download Data</button>
          </div>
          <div className="w-[90em] h-40 bg-[#FD3E12] mt-10">China</div>
          <div className="w-[80em] h-40 bg-[#FFA022]">Filipina</div>
          <div className="w-[70em] h-40 bg-[#FDC941]">Jepang</div>
          <div className="w-[60em] h-40 bg-[#FDE76F]">Me</div>
          <div className="w-[50em] h-40 bg-[#FDFBB9]">Amerika Serikat</div>
      </div>

      <div className="w-full ps-10">
        <h3 className="text-4xl font-extrabold mb-20">
          Menurut Kepala <br /> record income of more than <span className="bg-[#FD3E12]">$4 trillion</span> , while <br /> they invested just <span className="bg-[#FD3E12]">4%</span> of capital expenditure <br /> on clean energy. National oil companies are <br /> investing even less on clean energy than the <br /> likes of Chevron and ExxonMobil.
        </h3>
        <h3 className="text-2xl font-extrabold">The long-term effects of oil and gas emissions such as <span className="underline">extreme heat</span> are <br /> becoming increasingly present in the Arabian Gulf, where four of the five <br /> national oil companies featured are based. Neighbouring countries that can <br /> least afford to adapt to climate change are suffering the most.</h3>
      </div>
    </div>
  );
}
