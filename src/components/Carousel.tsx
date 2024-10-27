"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';

const slides = [
  { url: '/snowman_design3.png', alt: 'slide_1', text: 'Snowman' },
  { url: '/cat_design.png', alt: 'slide_2', text: 'Cat' },
  { url: '/koala_bear_design.png', alt: 'slide_3', text: 'Koala Bear' },
];

type CarouselProps ={
  className?: string;
}

const Carousel = ({ className }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className={`lg:max-w-[800px] lg:h-[600px] max-w-[600px] h-[300px] w-full lg:py-16 px-5 relative group lg:my-20 my-7  mx-4 ${className}`}>
      <div className='relative w-full h-full rounded-2xl bg-center bg-cover duration-500'>
        <Image
          src={slides[currentIndex].url}
          alt={slides[currentIndex].alt}
          fill
          style={{ objectFit: 'cover' }}
          className="rounded-5xl"
        />
        <div className="absolute bottom-0 right-0 bg-green-900 bg-opacity-90 text-white text-center p-3 rounded-3xl text-xl mb-5 w-3/4 left-1/2 transform -translate-x-1/2">
          {slides[currentIndex].text}
        </div>
      </div>

      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>

      <div className='flex top-4 justify-center py-2'>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`cursor-pointer w-3 h-3 mx-2 rounded-full ${
              slideIndex === currentIndex ? 'bg-green-900' : 'bg-gray-400'
            }`}
          >
          </div>
        ))}
      </div>
    </div>
  );
}

export default Carousel;