// app/page.tsx (atau komponen utama lainnya)
import React, { useState } from 'react';
import Image from 'next/image';
import Orang1 from "../../public/orang1.jpg";
import Orang2 from "../../public/orang2.jpg";
import Orang3 from "../../public/orang3.jpg";

const PencarianOrang = () => {
  // Data orang
  const orangData = [
    {
      nama: "Darren Woods",
      jabatan: "CEO, ExxonMobil",
      tanggal: "31, Oktober 2020",
      gambar: Orang1, 
    },
    {
      nama: "John Doe",
      jabatan: "CTO, TechCorp",
      tanggal: "15, Maret 2021",
      gambar: Orang2, 
    },
    {
      nama: "Jane Smith",
      jabatan: "COO, Global Ventures",
      tanggal: "10, Juli 2022",
      gambar: Orang3,
    },
  ];

  return (
    <div className="font-geist-mono text-[#f4f4f4]">
      <div className="space-y-10">
        {orangData.map((orang, index) => {
          const [isRotated, setIsRotated] = useState(false);
          const [isDetailsVisible, setIsDetailsVisible] = useState(false);

          const handleClick = () => {
            setIsRotated(!isRotated);
            setIsDetailsVisible(!isDetailsVisible); 
          };

          return (
            <div className="flex flex-col mb-10" data-aos="fade-up" key={index}>
              <hr className='border-t-2 border-black mt-10 mb-10' data-aos="fade-up " />
              <div className="flex">
                <Image
                  src={orang.gambar}
                  quality={100}
                  width={200}
                  height={200}
                  alt="Background Image"
                  className="bg-background"
                />
                <div className="ms-10  w-[20em]">
                  <h3 className="font-extrabold text-black text-[24px] ">{orang.nama}</h3>
                  <h3 className="font-extrabold text-[#CBCBCB] text-[24px]">{orang.jabatan}</h3>
                </div>
                <h1 className="font-extrabold text-[50px] text-black  ms-20 w-[12em]">{orang.tanggal}</h1>

                {/* Tombol Putar */}
                <div
                  className={`rounded-full w-16 h-16 bg-[#FD3E12] flex items-center justify-center ms-28 cursor-pointer transition-transform duration-500 ${isRotated ? 'rotate-180' : ''}`}
                  onClick={handleClick}
                >
                  <h1 className="text-white text-[50px]">+</h1>
                </div>
              </div>

              {/* Detail yang ditampilkan setelah tombol diklik */}
              {isDetailsVisible && (
                <div className="mt-4 p-4 " data-aos="fade-bottom">
                  <p className="text-black text-[18px]">
                    Detail mengenai {orang.nama}, {orang.jabatan}. Beliau memimpin perusahaan di bidang energi dengan fokus pada inovasi dan keberlanjutan.
                  </p>
                </div>
              )}
               
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PencarianOrang;
