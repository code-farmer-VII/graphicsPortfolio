"use client"; 
import { useWindowSize } from '@/hooks/useWindowSize'; 
import { ChevronLeft, ChevronRight } from 'lucide-react'; 
import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'; 
import "swiper/css"; 
import Image from 'next/image'; 
import { ArrowUpRight } from 'lucide-react'; 
import { portfolios } from '@/constant/portfolio'; // Ensure this path is correct
import { motion } from "framer-motion";
import Link from 'next/link';

export const PortfolioSection = ({ data, title }) => {
  const swiperRef = useRef(null);
  const [sliderPreview, setSliderPreview] = useState(3);
  const [currentImg, setCurrentImg] = useState(data[0]?.images[0]); 
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const openModal = (src) => {
    setCurrentImage(src);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setCurrentImage(null);
  };

  const preventContextMenu = (e) => {
    e.preventDefault();
  };

  const { width } = useWindowSize(); 

  useEffect(() => {
    if (width < 768) {
      setSliderPreview(1);
    } else if (width < 1268) {
      setSliderPreview(2);
    } else {
      setSliderPreview(3);
    }
  }, [width]);

  const handleKeyDown = (e) => {
    if (e.key === "Escape") closeModal();
  };

  return (
    <section id='portfolio' className='max-width section-padding lg:px-24 px-6'>
      <div className='pb-3 border-peach flex justify-between items-center'>
        <p className="text-4xl font-bold">{title}</p>
        <div className='flex gap-2'>
          <button
            className='bg-peach-200 border-peach p-1 rounded text-gray-700'
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <ChevronLeft />
          </button>
          <button
            className='bg-peach-200 border-peach p-1 rounded text-gray-700'
            onClick={() => swiperRef.current?.slideNext()}
          >
            <ChevronRight />
          </button>
        </div>
      </div>

      <div className="pt-8" onKeyDown={handleKeyDown} tabIndex={0}>
        <Swiper
          spaceBetween={20}
          slidesPerView={sliderPreview}
          loop={true}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
          {data.map((portfolio, index) => (
            <SwiperSlide key={index}>
              <div className='box'>
                <h4 className='mb-5 text-2xl font-bold '>{portfolio.title}</h4>
                <div className='relative w-full h-80 rounded-lg overflow-hidden group cursor-pointer mb-5'>
                  <Image
                    src={currentImg}
                    alt={portfolio.title}
                    fill
                    className=' object-center transition-transform duration-500 object-contain'
                  />
                  <div className='bg-black bg-opacity-10 backdrop-blur-[1px] absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center'>
                    <div className='w-16 h-16 flex items-center justify-center bg-peach-700 border border-peach-400 p-3 text-gray-100 rounded-lg'>
                      <ArrowUpRight 
                      onClick={() => openModal(currentImg)} // Use currentImg here
                      />
                    </div>
                  </div>
                </div>

                <div className='grid grid-cols-3 gap-3'>
                  {portfolio.images.map((img, imgIndex) => (
                    <div
                      key={imgIndex}
                      className='relative w-full h-24 rounded-lg overflow-hidden cursor-pointer group'
                      onClick={() => {
                        setCurrentImg(img);
                      }}
                    >
                      <Image
                        src={img}
                        alt={`${portfolio.title} - image ${imgIndex + 1}`}
                        fill
                        className={`object-cover object-center transition-transform duration-500 group-hover:scale-110`}
                      />
                      <div
                        className={`bg-black bg-opacity-10 backdrop-blur-[1px] absolute top-0 left-0 w-full h-full transition-opacity duration-300 ${currentImg !== img ? 'opacity-0' : 'opacity-100'}`}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="flex flex-col lg:flex-row lg:space-x-4 space-y-4 lg:space-y-0 py-12 justify-center">
        <Link
          href="/gallary" // Fixed the spelling of "gallery"
          className="border-2 hover:border-white px-6 py-3 border-yellow-400 rounded-full font-medium transition hover:bg-yellow-400 transform ease-in-out duration-500 hover:text-black"
        >
          Show More
        </Link>
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50" onClick={closeModal}>
          <div className="relative max-w-lg w-full">
            <Image
              src={currentImage}
              alt="Large View"
              className="object-cover"
              width={600}
              height={600}
              onContextMenu={preventContextMenu}
              onDragStart={(e) => e.preventDefault()}
            />
            <button
              className="absolute top-2 right-2 text-red-800 text-2xl"
              onClick={closeModal}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
