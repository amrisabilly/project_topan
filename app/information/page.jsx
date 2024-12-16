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
      duration: 1000,
      easing: 'ease-in-out',
      once: true, 
      mirror: false,
    });
    AOS.refresh(); 
  }, []);

  return (
    <div className="bg-white font-geist-mono text-[#f4f4f4] w-full min-h-screen overflow-x-hidden">
      <Navbar />
      <div className="bg-black w-full h-[20em] pt-[8em] ps-10">
        <h1
          className="font-extrabold text-[30px] text-[#f4f4f4] w-[25em]"
          data-aos="fade-up"
        >
          Stay informed, stay safe-track the cyclone with us{' '}
          <span className="bg-red-600">GeoTyphoon.</span>
        </h1>
      </div>

      <div className="text-black h-[40em] grid grid-cols-2 mb-20">
        {/* Kolom 1 */}
        <div className="h-full relative">
          <div className="absolute bottom-0 left-0 p-5">
            <h1 className="font-extrabold text-[30px] mb-3">
              Mitigasi Bencana Topan
            </h1>
            <h3>
            Mitigasi bencana topan merupakan serangkaian upaya yang dilakukan sebelum bencana terjadi dengan tujuan meminimalkan dampak yang ditimbulkan. Langkah mitigasi meliputi peningkatan kesadaran masyarakat melalui edukasi, seperti sosialisasi tentang tanda-tanda topan dan simulasi evakuasi yang rutin dilakukan. Selain itu, perencanaan tata ruang menjadi aspek penting dengan membatasi pembangunan di wilayah rawan bencana dan memastikan infrastruktur dirancang tahan terhadap angin kencang.

Penerapan sistem peringatan dini juga menjadi bagian dari mitigasi, di mana teknologi digunakan untuk memantau cuaca dan memberikan informasi cepat kepada masyarakat melalui sirene, aplikasi, atau SMS. Di sisi lingkungan, penghijauan di daerah pesisir dengan menanam mangrove atau vegetasi pantai lainnya membantu mengurangi dampak angin kencang dan banjir. Sistem drainase yang baik juga dipastikan untuk mencegah banjir bandang yang sering menyertai topan.            </h3>
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
        <div className="h-full relative">
          <div className="absolute bottom-0 left-0 p-5">
            <h1 className="font-extrabold text-[30px] mb-3">
              Penanggulangan Bencana Topan
            </h1>
            <h3>
            Penanggulangan bencana topan mencakup upaya yang dilakukan saat dan setelah bencana terjadi untuk menyelamatkan masyarakat serta memulihkan kondisi wilayah terdampak. Dalam tahap tanggap darurat, posko evakuasi didirikan untuk memberikan perlindungan sementara dan menyediakan kebutuhan dasar, seperti makanan, air bersih, dan obat-obatan. Tim SAR dikerahkan untuk menyelamatkan korban, memberikan bantuan medis, serta mengevakuasi masyarakat yang terjebak.

Distribusi bantuan dilakukan secara terorganisir, melibatkan pemerintah, organisasi kemanusiaan, dan masyarakat untuk memastikan kebutuhan logistik, seperti pakaian dan perlengkapan sanitasi, terpenuhi. Setelah kondisi stabil, rehabilitasi infrastruktur menjadi fokus utama, termasuk perbaikan rumah, fasilitas umum, dan jalan yang rusak. Dukungan ekonomi juga diberikan melalui bantuan modal untuk membantu masyarakat, terutama petani atau nelayan, kembali beraktivitas.

Langkah penanggulangan ditutup dengan evaluasi dan analisis terhadap respons bencana, sehingga kekurangan yang ada dapat diperbaiki dan sistem penanganan di masa depan menjadi lebih efektif. Dengan penanggulangan yang baik, masyarakat terdampak dapat kembali bangkit dengan cepat.            </h3>
          </div>
        </div>
      </div>

      <FooterComponents />
    </div>
  );
};

export default page;
