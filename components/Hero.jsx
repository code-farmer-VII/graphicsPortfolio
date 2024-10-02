"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import LeBron from "@/assets/portfolio-1.png";

export default function Hero() {
  const roles = ["Graphic Designer", "Visual Artist", "Creative Strategist"];

  return (
    <section className="hero flex items-center justify-center lg:px-24 px-6 py-[8rem] md:h-screen ">
      <div className="container mx-auto">
        <div className="flex flex-col items-center lg:flex-row lg:items-center justify-between">
          {/* Left Side: Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left mb-8 lg:mb-0 lg:w-1/2"
          >
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl lg:text-5xl font-bold mb-4"
            >
              Hello, I&apos;m <span className="text-yellow-400">Temesgen Gonfa</span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-xl lg:text-2xl font-medium mb-6"
            >
              Professional <span className="text-yellow-400">{roles[0]}</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="text-lg mb-8"
            >
              Creating stunning visuals using Adobe Photoshop, Illustrator, and Canva.
              </motion.p>

            {/* Call-to-action buttons */}
            <div className="flex flex-col lg:flex-row lg:space-x-4 space-y-4 lg:space-y-0">
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="/gallery"
                className="bg-yellow-400 text-black px-6 py-3 rounded-full font-medium transition duration-300"
              >
                View Projects
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="https://www.canva.com/design/DAGSRcyPZR8/aU6uw8MEtJ7JpFbX4Q6l9g/view?utm_content=DAGSRcyPZR8&utm_campaign=designshare&utm_medium=link&utm_source=editor"
                className="border-2 border-white px-6 py-3 rounded-full font-medium transition duration-300"
              >
                Show my cv
              </motion.a>
            </div>
          </motion.div>

          {/* Right Side: Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.2, x: 50  }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 flex justify-center"
          >
            <Image
              src={LeBron}
              alt="Profile Picture"
              width={500}
              height={500}
              className="md:pt-32"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
