"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import haile from "@/assets/image/EnduranceHaileGebrselassie.png";
import banner from "@/assets/image/banner.png";
import Formula from "@/assets/image/Formula 1.png";
import jucebanner from "@/assets/image/jucebanner.png";
import NBA from "@/assets/image/NBA basketball.png";
import newYear from "@/assets/image/new-year.jpg";
import Nike from "@/assets/image/Nike Shose.png";
import SPACE from "@/assets/image/SPACE VII.png";
import SPACEVII from "@/assets/image/SPACE X 1.png";
import yoni from "@/assets/image/yoni zema.png"
import BaseBall from "@/assets/image/BASE BALL.png"
import America from "@/assets/image/AMERICAN FOOTBALL.png"
import Logos from "@/assets/image/LOGO-1.png"
import Temesgen from "@/assets/image/TEMESGEN BANK.png"
import Water from "@/assets/image/WATER.png"

const images = [
  Logos,
  Temesgen,
  Water,
  yoni,
  BaseBall,
  America,
  haile,
  Formula,
  jucebanner,
  NBA,
  SPACE,
  SPACEVII,
  newYear,
  Nike,
  banner,
];

const ImageGallery = () => {
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

  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      closeModal();
    }
  };

  return (
    <div className="relative" onKeyDown={handleKeyDown} tabIndex={0}>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {images.map((src, index) => (
          <div key={index} className="flex items-center justify-center cursor-pointer">
            <Image
              src={src}
              alt={`Image ${index + 1}`}
              className="object-contain transition-transform transform hover:scale-105"
              width={300}
              height={300}
              onClick={() => openModal(src)}
              onContextMenu={preventContextMenu}
              onDragStart={(e) => e.preventDefault()}
            />
          </div>
        ))}
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
          onClick={closeModal}
        >
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
    </div>
  );
};

export default ImageGallery;
