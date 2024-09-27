// "use client"; 
// import { ArrowUpRight } from 'lucide-react';
// import Image from 'next/image'; 
// import React, { useState } from 'react'; 
// import { motion } from 'framer-motion'; 
// const PortfolioItem = ({ portfolio }) => {
//   const [currentImg, setCurrentImg] = useState(portfolio.images[0]); 
//   console.log(currentImg)

//   return (
//     <div className='box'>
//       <h4 className='mb-5 text-2xl font-bold '>{portfolio.title}</h4>
//       <motion.div
//         className='relative w-full h-80 rounded-lg overflow-hidden group cursor-pointer mb-5'
//         whileHover={{ scale: 1.05 }}
//         transition={{ duration: 0.3 }}
//       >
//         <Image
//           src={currentImg}
//           alt={portfolio.title}
//           fill
//           className='object-cover object-center transition-transform duration-500'
//         />
//         <div className='bg-black bg-opacity-10 backdrop-blur-[1px] absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center'>
//           <div className='w-16 h-16 flex items-center justify-center bg-peach-700 border border-peach-400 p-3 text-gray-100 rounded-lg'>
//             <ArrowUpRight />
//           </div>
//         </div>
//       </motion.div>

//       <div className='grid grid-cols-3 gap-3'>
//         {portfolio.images.map((img, index) => (
//           <div
//             key={index}
//             className='relative w-full h-24 rounded-lg overflow-hidden cursor-pointer group'
//             onClick={() => setCurrentImg(img)}
//           >
//             <Image
//               src={img}
//               alt={`${portfolio.title} - image ${index + 1}`}
//               fill
//               className={`object-cover object-center transition-transform duration-500 group-hover:scale-110`}
//             />
//             <div
//               className={`bg-black bg-opacity-10 backdrop-blur-[1px] absolute top-0 left-0 w-full h-full transition-opacity duration-300 ${
//                 currentImg !== img ? 'opacity-0' : 'opacity-100'
//               }`}
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default PortfolioItem;
