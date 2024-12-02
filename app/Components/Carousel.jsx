import React, { useState } from 'react';
import { BsArrowRightSquareFill } from "react-icons/bs";
import { BsArrowLeftSquareFill } from "react-icons/bs";



const Carousel = () => {
  // State untuk melacak slide saat ini
  const [currentSlide, setCurrentSlide] = useState(0);

  // Data carousel
  const slides = [
    {
      quote: `"Angin topan disebabkan oleh perbedaan tekanan dalam suatu sistem cuaca dengan jarak minimal 500 km dari garis khatulistiwa"`,
      author: "Chris Landsea, June 2010",
    },
    {
      quote: `"Angin topan biasa terjadi saat pergantian musim dari musim panas ke musim gugur."`,
      author: "John Molinari & David Vollaro, Sep 2000.",
    },
  ];

  // Fungsi untuk berpindah slide
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="absolute h-[27em] w-[50em] bg-white/30 bottom-0 left-1/2 transform -translate-x-1/2 mb-56">
      {/* Kontainer carousel */}
      <div className="text-center flex flex-col h-full justify-center px-20 cursor-grab">
        <h1 className="font-extrabold text-[20px] mb-10 text-white">
          {slides[currentSlide].quote}
        </h1>
        <h3 className="font-medium text-white">
          {slides[currentSlide].author}
        </h3>
      </div>
      {/* Navigasi */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex gap-5">
        <button
          onClick={prevSlide}
          className=""
        >
          <BsArrowLeftSquareFill className='w-10 h-10'/>
        </button>
        <button
          onClick={nextSlide}
          className=""
        >
          <BsArrowRightSquareFill className='w-10 h-10'/>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
