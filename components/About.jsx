// "use client"; // For client-side rendering
// import { motion } from 'framer-motion';
// import Image from 'next/image';
// import LeBron from "@/assets/LeBronJames5.jpg";

// const About = () => {
//   const variants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0 },
//   };

//   const imageVariants = {
//     hidden: { scale: 0.8, opacity: 0 },
//     visible: { scale: 1, opacity: 1 },
//   };

//   return (
//     <section id="#about" className="py-20">
//       <div className="max-w-7xl mx-auto px-4">
//         <motion.div
//           initial="hidden"
//           animate="visible"
//           variants={variants}
//           transition={{ duration: 0.5, ease: 'easeInOut' }}
//           className="flex flex-col md:flex-row items-center"
//         >
//           {/* Text Content */}
//           <motion.div
//             className="md:w-1/2 md:pr-8"
//             initial="hidden"
//             animate="visible"
//             variants={variants}
//             transition={{ duration: 0.5, ease: 'easeInOut' }}
//           >
//             <h2 className="text-4xl font-bold ">About Me</h2>
//             <p className="mt-4">
//               I am a passionate graphic designer with a love for creating stunning visuals. 
//               My goal is to bring your ideas to life through captivating design.
//             </p>
//             <p className="mt-4">
//               With years of experience in various design disciplines, I focus on delivering high-quality work that meets my clients' needs.
//             </p>
//           </motion.div>

//           {/* Image Content */}
//           <motion.div
//             className="md:w-1/2 mt-8 md:mt-0"
//             initial="hidden"
//             animate="visible"
//             variants={imageVariants}
//             transition={{ duration: 0.5, ease: 'easeInOut' }}
//           >
//             <Image
//               src={LeBron} 
//               alt="Graphic Designer"
//               className="rounded-lg shadow-lg w-full"
//               layout="responsive"
//               objectFit="cover"
//             />
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default About;
