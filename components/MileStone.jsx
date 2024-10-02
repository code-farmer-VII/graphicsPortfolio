"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Services } from "@/constant/service";
import LeBron from "@/assets/portfolio-1.png";

const textVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.3 },
  },
};

const ExperienceCard = ({ service, isOdd }) => (
  <motion.div 
    className={`flex flex-col md:flex-row ${isOdd ? "md:flex-row-reverse" : "md:flex-row"} relative mb-8`} 
    variants={cardVariant}
    initial="hidden"
    whileInView="visible"
  >
    {/* Content */}
    <div className={`card-milestone flex flex-col justify-end bg-[#1d1836] md:w-1/2 text-white px-6 py-4 rounded-lg shadow-lg transition-transform transform hover:-translate-y-2 ${isOdd ? "md:mr-0" : "md:ml-0"} mb-2`}>
      <motion.h3
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
       className="text-xl font-bold text-yellow-500 py-3">{service.title}</motion.h3>
      <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
       className="text-secondary text-sm font-semibold text-center py-2">{service.description}</motion.p>
    </div>

    {/* Icon on the center line */}
    <div className="absolute w-10 h-10 rounded-full bg-gray-200 flex justify-center items-center border-4 border-white -translate-x-1/2 left-[-50px] md:left-1/2 shadow-lg z-20">
      <Image
        src={LeBron} // You may want to change this to a relevant icon or image for each service
        alt={service.title}
        className="w-8 h-8 object-contain"
        width={32}
        height={32}
      />
    </div>

    {/* Vertical line */}
    <div className="absolute w-1 bg-gray-200 h-full left-[-50px] md:left-1/2 top-0 md:block"></div>
  </motion.div>
);

const Experience = () => (
  <div className="py-8">
    <motion.div 
      initial="hidden" 
      whileInView="visible" 
      variants={textVariant} 
      className="text-center mb-8" 
      id="services"
    >
      <p className="text-secondary text-sm">I do for you</p>
      <h2 className="text-4xl font-bold">My Services</h2>
    </motion.div>

    <div className="relative px-4 md:px-24">
      {/* Timeline */}
      <motion.div
        className="flex flex-col"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
      >
        {Services.map((service, index) => (
          <ExperienceCard key={index} service={service} isOdd={index % 2 === 1} />
        ))}
      </motion.div>
    </div>
  </div>
);

export default Experience;
