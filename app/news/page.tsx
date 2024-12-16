'use client';

import React, { useState } from 'react';
import Navbar from "../Components/NavbarComponent";
import Image from "next/image";
import Tornado from "../../public/tornado.jpg";
import { motion } from 'framer-motion';
import FooterComponents from '../Components/FooterComponents';

const cases = [
  {
    id: 1,
    title: "Korban Tewas Akibat Topan Yagi di Myanmar Mencapai 74 Orang",
    description:
      "Pemerintah Thailand mencatatkan sedikitnya 74 orang tewas akibat badai dan banjir bandang yang ditimbulkan Topan Yagi.",
    location: "Asia",
    src: "https://www.cnnindonesia.com/internasional/20240915210019-106-1144724/korban-tewas-akibat-topan-yagi-di-myanmar-bertambah-jadi-74",
  },
  {
    id: 2,
    title: "Topan Super Yagi Mengamuk di Vietnam, 14 Orang Tewas",
    description:
      "Topan Yagi bertiup dari Filipina barat laut ke Laut Cina Selatan dan menyebabkan sedikitnya 14 orang tewas.",
    location: "Asia",
    src: "https://www.cnnindonesia.com/internasional/20240908170305-106-1142293/topan-super-yagi-mengamuk-di-vietnam-14-orang-tewas",
  },
  {
    id: 3,
    title: "Topan Nanmadol Hantam Jepang, Ribuan Warga Dievakuasi",
    description:
      "Lebih dari 12 ribu orang mencari perlindungan di tempat evakuasi. Sekitar 8 ribu orang meninggalkan rumah mereka akibat topan.",
    location: "Asia",
    src: "https://www.cnnindonesia.com/internasional/20220919001426-113-849508/topan-nanmadol-hantam-jepang-ribuan-warga-evakuasi",
  },
  {
    id: 4,
    title: "Angin Kencang di Batu Jawa Timur, 515 Rumah Rusak",
    description:
      "Akibat badai kencang, pengungsi dari Kota Batu sempat mencapai 1.357 jiwa. Sedikitnya 278 di antaranya memerlukan pelayanan kesehatan.",
    location: "Asia",
    src: "https://www.cnnindonesia.com/nasional/20191024073518-20-442385/angin-kencang-di-batu-jawa-timur-515-rumah-rusak",
  },
  {
    id: 5,
    title: "Angin Kencang di Rancaekek, Jawa Barat: Tornado atau Puting Beliung?",
    description:
      "Sebanyak 835 keluarga terdampak, dan 33 orang luka-luka serta menjalani perawatan di rumah sakit.",
    location: "Asia",
    src: "https://www.bbc.com/indonesia/articles/cndnnd18n4ro",
  },
  {
    id: 6,
    title: "Topan Super Rai Hantam Filipina: Korban Meninggal Melonjak Lebih dari 300 Jiwa",
    description:
      "Jumlah korban meninggal terus bertambah, menjadikan Topan Rai salah satu bencana besar di Filipina.",
    location: "Asia",
    src: "https://www.bbc.com/indonesia/dunia-59724223",
  },
  {
    id: 7,
    title: "5 Fakta Topan Haikui Terjang Taiwan: Ribuan Warga Mengungsi",
    description:
      "Topan Haikui menghantam Taiwan, menyebabkan ribuan warga dievakuasi, listrik padam, dan kerusakan luas di berbagai wilayah.",
    location: "Asia",
    src: "https://news.detik.com/internasional/d-6913112/5-fakta-topan-haikui-terjang-taiwan-sebabkan-ribuan-warga-mengungsi",
  },
  {
    id: 8,
    title: "Angin Topan Melanda Brasil: 31 Orang Tewas",
    description:
      "Topan dahsyat menerjang Brasil, menewaskan 31 orang dan memicu banjir serta tanah longsor yang meluas.",
    location: "Global",
    src: "https://news.detik.com/internasional/d-6917606/angin-topan-melanda-brasil-31-orang-tewas",
  },
  {
    id: 9,
    title: "Topan Terjang India dan Bangladesh: 16 Orang Tewas",
    description:
      "Bencana topan menghantam India dan Bangladesh, merenggut 16 jiwa dan menyebabkan ribuan warga mengungsi.",
    location: "Asia",
    src: "https://news.detik.com/internasional/d-7361760/angin-topan-terjang-india-bangladesh-16-orang-tewas",
  },
  {
    id: 10,
    title: "Rumah di Florida Diikat Tali Plastik untuk Hadapi Badai Milton",
    description:
      "Sebuah rumah di Florida menjadi viral karena menggunakan tali plastik sebagai perlindungan dari terjangan Badai Milton.",
    location: "Global",
    src: "https://www.detik.com/properti/berita/d-7588348/viral-rumah-diikat-tali-plastik-cegah-tersapu-badai-milton-hasilnya",
  },
  {
    id: 11,
    title: "Badai Milton Menghancurkan Wilayah Florida, AS",
    description:
      "Setelah Topan Krathon, Badai Milton kini melanda Florida, menyebabkan kehancuran luas di wilayah tersebut.",
    location: "Eropa",
    src: "https://www.tempo.co/internasional/usai-topan-krathon-di-taiwan-kini-badai-milton-hancurkan-wilayah-florida-as-58881",
  },
  {
    id: 12,
    title: "Mengapa Angin Tornado Sering Terjadi di Amerika Serikat?",
    description:
      "Fenomena angin tornado di Amerika Serikat dijelaskan, mengungkap alasan geografis dan iklim yang mendukung kemunculannya.",
    location: "Global",
    src: "https://www.kompas.com/sains/read/2021/10/23/110200723/mengapa-angin-tornado-sering-terjadi-di-amerika-serikat-?page=all",
  },
  {
    id: 13,
    title: "Sisa Topan Beryl Memicu Hujan Lebat di Vermont",
    description:
      "Topan Beryl yang melemah tetap membawa hujan deras dan banjir besar di Vermont, Amerika Serikat.",
    location: "Global",
    src: "https://www.voaindonesia.com/a/sisa-topan-beryl-picu-hujan-lebat-dan-banjir-di-vermont/7695131.html",
  },
  {
    id: 14,
    title: "Topan Idai Sebabkan 1.000 Orang Tewas di Afrika Selatan",
    description:
      "Topan Idai menjadi salah satu bencana alam terbesar di Afrika Selatan, menewaskan lebih dari 1.000 orang di tiga negara.",
    location: "Global",
    src: "https://kanalsatu.com/id/post/53323/diperkirakan-1000-orang-tewas-akibat-terjangan-topan-idai-di-tiga-negara-afrika-selatan",
  },
  {
    id: 15,
    title: "Topan Freddy Terjang Malawi: Ratusan Korban Jiwa",
    description:
      "Topan Freddy menghancurkan wilayah Malawi, menewaskan ratusan orang dan menyebabkan kerusakan besar.",
    location: "Global",
    src: "https://news.detik.com/internasional/d-6625128/5-fakta-topan-freddy-terjang-malawi-jatuh-ratusan-korban-jiwa",
  },
  {
    id: 16,
    title: "Badai Ernesto Diprediksi Menjadi Angin Topan",
    description:
      "Badai Ernesto diperkirakan meningkat menjadi angin topan, melewati Puerto Rico dan Virgin Islands dengan intensitas tinggi.",
    location: "Global",
    src: "https://www.voaindonesia.com/a/badai-ernesto-diperkirakan-menjadi-angin-topan-setelah-melewati-puerto-rico-virgin-islands-/774248.html",
  },
  {
    id: 17,
    title: "Topan Krathon Landa Taiwan: 10.000 Warga Dievakuasi",
    description:
      "Topan Krathon menyebabkan kerusakan besar di Taiwan, memaksa 10.000 warga meninggalkan rumah mereka.",
    location: "Asia",
    src: "https://video.kompas.com/watch/1720408/topan-krathon-landa-taiwan-perkantoran-dan-sekolah-tutup-10000-warga-dievakuasi",
  },
  {
    id: 18,
    title: "Dampak Topan Pulasan di China: Sejumlah Area Ditutup",
    description:
      "Topan Pulasan memaksa penutupan area di China, dengan hujan deras dan angin kencang yang melumpuhkan aktivitas.",
    location: "Asia",
    src: "https://video.kompas.com/watch/1700900/dampak-topan-pulasan-di-china-sejumlah-area-ditutup",
  },
  {
    id: 19,
    title: "Dahsyatnya Topan Shanshan di Jepang: Kecepatan 90 Km/Jam",
    description:
      "Topan Shanshan membawa angin kencang dengan kecepatan 90 km/jam, menyebabkan kerusakan signifikan di Jepang",
    location: "Asia",
    src: "https://news.detik.com/internasional/d-7518597/dahsyatnya-topan-shanshan-berkecepatan-90-km-per-jam-di-jepang",
  },
  {
    id: 20,
    title: "Mengapa Angin Tornado Sering Terjadi di Amerika Serikat?",
    description:
      " Fenomena angin tornado di Amerika Serikat dijelaskan, mengungkap alasan geografis dan iklim yang mendukung kemunculannya.",
    location: "Global",
    src: "https://www.kompas.com/sains/read/2021/10/23/110200723/mengapa-angin-tornado-sering-terjadi-di-amerika-serikat-?page=all",
  },
];

const page = () => {
  const [filteredCases, setFilteredCases] = useState(cases);
  const [activeFilter, setActiveFilter] = useState("Global");
  const [visibleCount, setVisibleCount] = useState(6); // Mulai dengan 6 kasus
  const [isRotated, setIsRotated] = useState(false); // Untuk memutar tombol

  // Handle Filter
  const handleFilter = (location: "Global" | "Asia" | "Eropa") => {
    setActiveFilter(location);
    if (location === "Global") {
      setFilteredCases(cases);
    } else {
      const filtered = cases.filter((caseItem) => caseItem.location === location);
      setFilteredCases(filtered);
    }
    setVisibleCount(6); // Reset jumlah terlihat saat filter berubah
  };

  // Handle Show More / Putar Tombol
  const handleClick = () => {
    setIsRotated(!isRotated); // Toggle status rotasi
    setVisibleCount((prev) => prev + 6); // Tambahkan 6 kasus
  };

  // Kasus yang akan ditampilkan
  const displayedCases = filteredCases.slice(0, visibleCount);

  return (
    <div className='bg-black font-geist-mono text-[#f4f4f4] w-full h-auto'>
      <Navbar />
      <div className='relative w-full h-[80vh] overflow-hidden'>
        <Image
          src={Tornado}
          layout="fill"
          objectFit="cover"
          quality={100}
          alt="Background Image"
          className="bg-background"
        />
        <h1 className='absolute text-white font-extrabold text-[2em] w-[30em] bottom-0 left-10' data-aos="fade-up">
          Topan Melanda: <span className="text-white">
          Info Terkini, Tindakan Keselamatan, dan Evakuasi Darurat.</span>
        </h1>
      </div>
      <div className='w-full bg-white h-auto text-black px-10 py-20'>
        <div className='flex justify-between mb-20' data-aos="fade-up">
          <h1 className='font-extrabold text-[3em]'>Global Cases</h1>
          <h1 className='font-extrabold text-[3em]'>{filteredCases.length}</h1>
        </div>

        {/* Filter Cases */}
        <div className='flex mb-10 items-center gap-5' data-aos="fade-up">
          <h3 className='text-[#B2B2B2]'>Filter : </h3>
          <button
            className={`px-3 py-1 font-extrabold ${activeFilter === "Global" ? "bg-red-600 text-white" : "bg-slate-200"}`}
            onClick={() => handleFilter("Global")}
          >
            Global
          </button>
          <button
            className={`px-3 py-1 font-extrabold ${activeFilter === "Asia" ? "bg-red-600 text-white" : "bg-slate-200"}`}
            onClick={() => handleFilter("Asia")}
          >
            Asia
          </button>
          <button
            className={`px-3 py-1 font-extrabold ${activeFilter === "Eropa" ? "bg-red-600 text-white" : "bg-slate-200"}`}
            onClick={() => handleFilter("Eropa")}
          >
            Eropa
          </button>
        </div>

        {/* Cases List */}
        <div className='grid grid-cols-3 gap-10'>
          {displayedCases.map((caseItem) => (
            <motion.div
            key={caseItem.id}
            className="px-5 container mb-20"
            initial="rest"
            whileHover="hover"
            animate="rest"
          >
            <hr className="border-t-2 border-red-600 mb-5" data-aos="fade-up" />
            <h1 className="font-extrabold text-[22px] mb-5" data-aos="fade-up">{caseItem.title}</h1>
            <h3 className="mb-5" data-aos="fade-up">{caseItem.description}</h3>
            <h3 className="text-[#999999] mb-5" data-aos="fade-up">{caseItem.location}</h3>
            <a
              href={caseItem.src}
              target="_blank"
              rel="noopener noreferrer"
              className="relative bg-transparent border border-red-600 transition duration-700 ease-in-out hover:border-red-600 px-8 py-2 text-red-600 hover:text-white font-extrabold overflow-hidden inline-block"
            >
              <motion.div
                className="absolute inset-0 bg-red-600"
                variants={{
                  rest: { scaleX: 0 },
                  hover: { scaleX: 1 },
                }}
                transition={{
                  duration: 0.5,
                  ease: 'easeInOut',
                }}
                style={{
                  originX: 0,
                  zIndex: 1,
                }}
              ></motion.div>
              <motion.span
                className="relative z-10"
                variants={{
                  rest: { color: '#FF0000' },
                  hover: { color: '#FFFFFF' },
                }}
                transition={{
                  duration: 0.3,
                  ease: 'easeInOut',
                }}
              >
                View Case
              </motion.span>
            </a>
          </motion.div>
          
          ))}
        </div>

        {/* Tombol Putar untuk Show More */}
        {visibleCount < filteredCases.length && (
          <div className="flex mt-10 items-center gap-6">
            <h3 className='text-4xl font-extrabold'>Show More</h3>
            <div
              className={`rounded-full w-12 h-12 bg-[#FD3E12] flex items-center justify-center cursor-pointer transition-transform duration-500 ${isRotated ? 'rotate-180' : ''}`}
              onClick={handleClick}
            >
              <h1 className="text-white text-[50px]">+</h1>
            </div>
          </div>
        )}
      </div>
      <FooterComponents />
    </div>
  );
};

export default page;
