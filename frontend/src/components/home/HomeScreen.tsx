// // components/HeroSection.tsx
// 'use client';

// import { motion } from 'framer-motion';
// import { useEffect, useState } from 'react';

// type Particle = {
//   x: number;
//   y: number;
//   duration: number;
//   delay: number;
// };

// export const HomeSection = () => {
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const [particles, setParticles] = useState<Particle[]>([]);

//   useEffect(() => {
//     const handleMouseMove = (e: MouseEvent) => {
//       setMousePosition({ x: e.clientX, y: e.clientY });
//     };

//     if (typeof window !== 'undefined') {
//       const width = window.innerWidth;
//       const height = window.innerHeight;
//       const particleCount = Math.min(20, Math.max(12, Math.floor(width / 120)));

//       setParticles(
//         Array.from({ length: particleCount }, (_, i) => ({
//           x: (i % 5) * (width / Math.max(5, particleCount / 4)) + 40,
//           y: (i % 4) * (height / 4) + 40,
//           duration: 6 + (i % 7),
//           delay: (i % 5) * 0.4,
//         }))
//       );
//     }

//     window.addEventListener('mousemove', handleMouseMove);
//     return () => window.removeEventListener('mousemove', handleMouseMove);
//   }, []);

//   return (
//     <section className="relative h-screen flex items-center justify-center px-4">
//       <motion.div
//         className="absolute w-96 h-96 bg-purple-600 rounded-full filter blur-3xl opacity-20"
//         animate={{
//           x: mousePosition.x - 192,
//           y: mousePosition.y - 192,
//         }}
//         transition={{ type: 'spring', damping: 30, stiffness: 100 }}
//       />

//       <div className="absolute inset-0 overflow-hidden">
//         {particles.map((particle, i) => (
//           <motion.div
//             key={i}
//             className="absolute w-1 h-1 bg-white/20 rounded-full"
//             initial={{ x: particle.x, y: particle.y }}
//             animate={{
//               x: particle.x + (i % 2 === 0 ? 120 : -120),
//               y: particle.y + (i % 2 === 0 ? 80 : -80),
//             }}
//             transition={{
//               duration: particle.duration,
//               repeat: Infinity,
//               repeatType: 'mirror',
//               ease: 'linear',
//               delay: particle.delay,
//             }}
//           />
//         ))}
//       </div>

//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="relative z-10 text-center"
//       >
//         <motion.h1
//           className="text-6xl md:text-8xl font-bold text-white mb-6"
//           initial={{ scale: 0.5, opacity: 0 }}
//           animate={{ scale: 1, opacity: 1 }}
//           transition={{ duration: 0.5, delay: 0.2 }}
//         >
//           Build the Future
//           <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
//             Today
//           </span>
//         </motion.h1>

//         <motion.p
//           className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.4 }}
//         >
//           Next.js + Tailwind CSS — The ultimate stack for blazing fast,
//           beautifully animated web experiences.
//         </motion.p>

//         <motion.div
//           className="flex flex-col sm:flex-row gap-4 justify-center"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.6 }}
//         >
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold text-white shadow-lg shadow-purple-500/30"
//           >
//             Get Started
//           </motion.button>
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="px-8 py-4 bg-white/10 backdrop-blur-sm rounded-full font-semibold text-white border border-white/20"
//           >
//             Learn More
//           </motion.button>
//         </motion.div>
//       </motion.div>
//     </section>
//   );
// };




















// // components/HeroSection.tsx
// 'use client';

// import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';
// import { useEffect, useState, useRef } from 'react';

// type Particle = {
//   x: number;
//   y: number;
//   duration: number;
//   delay: number;
//   size: number;
//   rotation: number;
//   color: string;
// };

// type FloatingShape = {
//   x: number;
//   y: number;
//   duration: number;
//   delay: number;
//   size: number;
//   rotation: number;
//   type: 'circle' | 'square' | 'triangle';
//   color: string;
// };

// const createInitialParticles = (width: number, height: number) => {
//   const particleCount = Math.min(40, Math.max(20, Math.floor(width / 60)));

//   return Array.from({ length: particleCount }, (_, index) => ({
//     x: Math.random() * width,
//     y: Math.random() * height,
//     duration: 5 + Math.random() * 15,
//     delay: Math.random() * 5,
//     size: 1 + Math.random() * 3,
//     rotation: Math.random() * 360,
//     color: `hsla(${200 + Math.random() * 60}, 100%, 70%, ${0.1 + Math.random() * 0.3})`,
//   }));
// };

// const createInitialShapes = (width: number, height: number) => {
//   return Array.from({ length: 8 }, (_, index) => ({
//     x: Math.random() * width,
//     y: Math.random() * height,
//     duration: 10 + Math.random() * 20,
//     delay: Math.random() * 5,
//     size: 20 + Math.random() * 40,
//     rotation: Math.random() * 360,
//     type: ['circle', 'square', 'triangle'][index % 3] as FloatingShape['type'],
//     color: `hsla(${Math.random() * 360}, 80%, 60%, ${0.05 + Math.random() * 0.1})`,
//   }));
// };

// export const HomeSection = () => {
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const [particles, setParticles] = useState<Particle[]>([]);
//   const [shapes, setShapes] = useState<FloatingShape[]>([]);
//   const [hoveredButton, setHoveredButton] = useState<string | null>(null);
//   const [textIndex, setTextIndex] = useState(0);
//   const containerRef = useRef<HTMLDivElement>(null);

//   const texts = [
//     "Blazing Fast",
//     "Beautiful Animations",
//     "Production Ready",
//     "Developer Experience",
//   ];

//   // Mouse tracking with spring for smooth following
//   const mouseX = useMotionValue(0);
//   const mouseY = useMotionValue(0);
//   const springMouseX = useSpring(mouseX, { stiffness: 50, damping: 20 });
//   const springMouseY = useSpring(mouseY, { stiffness: 50, damping: 20 });

//   // 3D tilt effect
//   const rotateX = useTransform(springMouseY, [-500, 500], [15, -15]);
//   const rotateY = useTransform(springMouseX, [-500, 500], [-15, 15]);

//   useEffect(() => {
//     const handleMouseMove = (e: MouseEvent) => {
//       const { clientX, clientY } = e;
//       mouseX.set(clientX - window.innerWidth / 2);
//       mouseY.set(clientY - window.innerHeight / 2);

//       setMousePosition({ x: clientX, y: clientY });
//     };

//     if (typeof window !== 'undefined') {
//       const width = window.innerWidth;
//       const height = window.innerHeight;

//       setParticles(createInitialParticles(width, height));
//       setShapes(createInitialShapes(width, height));
//     }

//     const textInterval = setInterval(() => {
//       setTextIndex((prev) => (prev + 1) % texts.length);
//     }, 3000);

//     window.addEventListener('mousemove', handleMouseMove);
//     return () => {
//       window.removeEventListener('mousemove', handleMouseMove);
//       clearInterval(textInterval);
//     };
//   }, [mouseX, mouseY, texts.length]);

//   // Animated gradient positions
//   const gradientX = useTransform(springMouseX, [-500, 500], [0, 100]);
//   const gradientY = useTransform(springMouseY, [-500, 500], [0, 100]);

//   return (
//     <section 
//       ref={containerRef}
//       className="relative h-screen flex items-center justify-center px-4 overflow-hidden"
//     >
//       {/* Animated gradient background with mouse tracking */}
//       <motion.div
//         className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/50 to-slate-900"
//         style={{
//           backgroundPosition: `${gradientX}% ${gradientY}%`,
//         }}
//         transition={{ type: "spring", damping: 30 }}
//       />

//       {/* Multiple animated gradient blobs */}
//       {['purple', 'pink', 'blue', 'cyan'].map((color, index) => (
//         <motion.div
//           key={color}
//           className={`absolute rounded-full filter blur-3xl opacity-20`}
//           style={{
//             width: 300 + index * 100,
//             height: 300 + index * 100,
//             background: `radial-gradient(circle, ${color}-500, transparent)`,
//           }}
//           animate={{
//             x: [
//               mousePosition.x - 200 + index * 50,
//               mousePosition.x + 200 - index * 50,
//               mousePosition.x - 200 + index * 50,
//             ],
//             y: [
//               mousePosition.y - 200 + index * 50,
//               mousePosition.y + 200 - index * 50,
//               mousePosition.y - 200 + index * 50,
//             ],
//             scale: [1, 1.2, 1],
//           }}
//           transition={{
//             duration: 8 + index * 2,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//         />
//       ))}

//       {/* Floating shapes with 3D transforms */}
//       {shapes.map((shape, i) => {
//         return (
//           <motion.div
//             key={`shape-${i}`}
//             className="absolute"
//             style={{
//               x: shape.x,
//               y: shape.y,
//               rotate: shape.rotation,
//             }}
//             animate={{
//               x: [
//                 shape.x,
//                 shape.x + (i % 2 === 0 ? 200 : -200),
//                 shape.x + (i % 3 === 0 ? -150 : 150),
//                 shape.x,
//               ],
//               y: [
//                 shape.y,
//                 shape.y + (i % 2 === 0 ? -150 : 150),
//                 shape.y + (i % 3 === 0 ? 200 : -200),
//                 shape.y,
//               ],
//               rotate: [shape.rotation, shape.rotation + 360, shape.rotation],
//               scale: [1, 1.2, 0.8, 1],
//             }}
//             transition={{
//               duration: shape.duration,
//               repeat: Infinity,
//               ease: "easeInOut",
//               delay: shape.delay,
//             }}
//           >
//             {shape.type === 'circle' ? (
//               <div
//                 className="rounded-full"
//                 style={{
//                   width: shape.size,
//                   height: shape.size,
//                   background: shape.color,
//                   opacity: 0.12,
//                 }}
//               />
//             ) : shape.type === 'square' ? (
//               <div
//                 style={{
//                   width: shape.size,
//                   height: shape.size,
//                   background: shape.color,
//                   opacity: 0.12,
//                   borderRadius: '6px',
//                 }}
//               />
//             ) : (
//               <div
//                 style={{
//                   width: 0,
//                   height: 0,
//                   borderLeft: `${shape.size / 2}px solid transparent`,
//                   borderRight: `${shape.size / 2}px solid transparent`,
//                   borderBottom: `${shape.size}px solid ${shape.color}`,
//                   opacity: 0.12,
//                 }}
//               />
//             )}
//           </motion.div>
//         );
//       })}

//       {/* Particle system with varied animations */}
//       <div className="absolute inset-0 overflow-hidden">
//         {particles.map((particle, i) => (
//           <motion.div
//             key={i}
//             className="absolute rounded-full"
//             style={{
//               width: particle.size,
//               height: particle.size,
//               background: particle.color,
//               boxShadow: `0 0 ${particle.size * 2}px ${particle.color}`,
//             }}
//             initial={{ x: particle.x, y: particle.y, rotate: particle.rotation }}
//             animate={{
//               x: [
//                 particle.x,
//                 particle.x + (i % 3 === 0 ? 200 : -200),
//                 particle.x + (i % 2 === 0 ? -150 : 150),
//                 particle.x,
//               ],
//               y: [
//                 particle.y,
//                 particle.y + (i % 2 === 0 ? -150 : 150),
//                 particle.y + (i % 3 === 0 ? 200 : -200),
//                 particle.y,
//               ],
//               scale: [1, 1.5, 0.5, 1],
//               rotate: [particle.rotation, particle.rotation + 720, particle.rotation],
//               opacity: [0.2, 0.8, 0.2],
//             }}
//             transition={{
//               duration: particle.duration,
//               repeat: Infinity,
//               ease: "easeInOut",
//               delay: particle.delay,
//             }}
//           />
//         ))}
//       </div>

//       {/* Animated ring around content */}
//       <motion.div
//         className="absolute w-[600px] h-[600px] rounded-full border border-white/5"
//         animate={{
//           rotate: 360,
//           scale: [1, 1.05, 1],
//         }}
//         transition={{
//           rotate: { duration: 30, repeat: Infinity, ease: "linear" },
//           scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
//         }}
//       >
//         <motion.div
//           className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-purple-500 rounded-full shadow-lg shadow-purple-500/50"
//           animate={{
//             boxShadow: ['0 0 20px rgba(168,85,247,0.5)', '0 0 40px rgba(168,85,247,0.8)', '0 0 20px rgba(168,85,247,0.5)'],
//           }}
//           transition={{ duration: 2, repeat: Infinity }}
//         />
//         <motion.div
//           className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-pink-500 rounded-full shadow-lg shadow-pink-500/50"
//           animate={{
//             boxShadow: ['0 0 20px rgba(236,72,153,0.5)', '0 0 40px rgba(236,72,153,0.8)', '0 0 20px rgba(236,72,153,0.5)'],
//           }}
//           transition={{ duration: 2, delay: 1, repeat: Infinity }}
//         />
//         <motion.div
//           className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-cyan-500 rounded-full shadow-lg shadow-cyan-500/50"
//           animate={{
//             boxShadow: ['0 0 20px rgba(6,182,212,0.5)', '0 0 40px rgba(6,182,212,0.8)', '0 0 20px rgba(6,182,212,0.5)'],
//           }}
//           transition={{ duration: 2, delay: 0.5, repeat: Infinity }}
//         />
//         <motion.div
//           className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-amber-500 rounded-full shadow-lg shadow-amber-500/50"
//           animate={{
//             boxShadow: ['0 0 20px rgba(245,158,11,0.5)', '0 0 40px rgba(245,158,11,0.8)', '0 0 20px rgba(245,158,11,0.5)'],
//           }}
//           transition={{ duration: 2, delay: 1.5, repeat: Infinity }}
//         />
//       </motion.div>

//       {/* Main content with 3D tilt */}
//       <motion.div
//         className="relative z-10 text-center"
//         style={{
//           rotateX,
//           rotateY,
//           perspective: 1000,
//         }}
//         transition={{ type: "spring", damping: 20 }}
//       >
//         {/* Animated badges */}
//         <motion.div
//           className="flex gap-2 justify-center mb-8"
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.1 }}
//         >
//           {['Next.js', 'Tailwind', 'Framer Motion'].map((badge, i) => (
//             <motion.span
//               key={badge}
//               className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-sm text-white/80 border border-white/10"
//               whileHover={{ 
//                 scale: 1.1, 
//                 backgroundColor: 'rgba(255,255,255,0.2)',
//                 borderColor: 'rgba(255,255,255,0.3)',
//               }}
//               animate={{
//                 y: [0, -5, 0],
//               }}
//               transition={{
//                 y: { duration: 2, delay: i * 0.3, repeat: Infinity, ease: "easeInOut" },
//               }}
//             >
//               <span className="flex items-center gap-1">
//                 <span className="w-3 h-3 rounded-full bg-white/70" />
//                 {badge}
//               </span>
//             </motion.span>
//           ))}
//         </motion.div>

//         {/* Main heading with animated text */}
//         <motion.h1
//           className="text-6xl md:text-8xl font-bold text-white mb-4"
//           initial={{ scale: 0.5, opacity: 0 }}
//           animate={{ scale: 1, opacity: 1 }}
//           transition={{ duration: 0.8, type: "spring" }}
//         >
//           Build the Future
//           <motion.span
//             className="block bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent"
//             animate={{
//               backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
//             }}
//             transition={{
//               duration: 6,
//               repeat: Infinity,
//               ease: "linear",
//             }}
//             style={{
//               backgroundSize: '200% 200%',
//             }}
//           >
//             Today
//           </motion.span>
//         </motion.h1>

//         {/* Rotating text animation */}
//         <motion.div
//           className="h-12 mb-6 overflow-hidden"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.3 }}
//         >
//           <AnimatePresence mode="wait">
//             <motion.p
//               key={textIndex}
//               className="text-xl md:text-2xl text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text font-semibold"
//               initial={{ y: 40, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               exit={{ y: -40, opacity: 0 }}
//               transition={{ duration: 0.5 }}
//             >
//               {texts[textIndex]}
//             </motion.p>
//           </AnimatePresence>
//         </motion.div>

//         <motion.p
//           className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.4 }}
//         >
//           Next.js + Tailwind CSS — The ultimate stack for blazing fast,
//           beautifully animated web experiences.
//         </motion.p>

//         {/* Buttons with enhanced animations */}
//         <motion.div
//           className="flex flex-col sm:flex-row gap-4 justify-center"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.6 }}
//         >
//           <motion.button
//             className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold text-white shadow-lg shadow-purple-500/30 overflow-hidden"
//             whileHover={{ 
//               scale: 1.05,
//               boxShadow: '0 0 40px rgba(168,85,247,0.5)',
//             }}
//             whileTap={{ scale: 0.95 }}
//             onHoverStart={() => setHoveredButton('primary')}
//             onHoverEnd={() => setHoveredButton(null)}
//           >
//             <motion.div
//               className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400"
//               initial={{ x: '-100%' }}
//               animate={{ x: hoveredButton === 'primary' ? '100%' : '-100%' }}
//               transition={{ duration: 0.5 }}
//             />
//             <span className="relative flex items-center gap-2">
//               Get Started
//               <motion.span
//                 animate={{ x: hoveredButton === 'primary' ? 5 : 0 }}
//                 transition={{ type: "spring", stiffness: 300 }}
//               >
//                 <span className="block w-5 h-5 rounded-full border border-white/70" />
//               </motion.span>
//               <motion.span
//                 className="absolute -top-8 -right-8 w-16 h-16 bg-white/20 rounded-full blur-xl"
//                 animate={{
//                   scale: hoveredButton === 'primary' ? 2 : 0,
//                   opacity: hoveredButton === 'primary' ? 1 : 0,
//                 }}
//                 transition={{ duration: 0.3 }}
//               />
//             </span>
//           </motion.button>

//           <motion.button
//             className="group relative px-8 py-4 bg-white/10 backdrop-blur-sm rounded-full font-semibold text-white border border-white/20 overflow-hidden"
//             whileHover={{ 
//               scale: 1.05,
//               backgroundColor: 'rgba(255,255,255,0.2)',
//               borderColor: 'rgba(255,255,255,0.4)',
//             }}
//             whileTap={{ scale: 0.95 }}
//             onHoverStart={() => setHoveredButton('secondary')}
//             onHoverEnd={() => setHoveredButton(null)}
//           >
//             <motion.div
//               className="absolute inset-0 bg-white/5"
//               initial={{ y: '100%' }}
//               animate={{ y: hoveredButton === 'secondary' ? '0%' : '100%' }}
//               transition={{ duration: 0.3 }}
//             />
//             <span className="relative flex items-center gap-2">
//               <span className="w-5 h-5 rounded-full border border-white/60" />
//               Learn More
//               <motion.span
//                 animate={{ 
//                   rotate: hoveredButton === 'secondary' ? 360 : 0,
//                 }}
//                 transition={{ duration: 0.5 }}
//               >
//                 <span className="w-4 h-4 rounded-full bg-white/70" />
//               </motion.span>
//             </span>
//           </motion.button>
//         </motion.div>

//         {/* Animated scroll indicator */}
//         <motion.div
//           className="absolute bottom-8 left-1/2 -translate-x-1/2"
//           animate={{ 
//             y: [0, 10, 0],
//             opacity: [0.3, 1, 0.3],
//           }}
//           transition={{
//             duration: 2,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//         >
//           <motion.div
//             className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1"
//             animate={{
//               borderColor: ['rgba(255,255,255,0.3)', 'rgba(255,255,255,0.8)', 'rgba(255,255,255,0.3)'],
//             }}
//             transition={{ duration: 2, repeat: Infinity }}
//           >
//             <motion.div
//               className="w-1.5 h-3 bg-white/70 rounded-full"
//               animate={{
//                 y: [0, 16, 0],
//                 opacity: [0.3, 1, 0.3],
//               }}
//               transition={{
//                 duration: 2,
//                 repeat: Infinity,
//                 ease: "easeInOut",
//               }}
//             />
//           </motion.div>
//         </motion.div>
//       </motion.div>

//       {/* Animated corner decorations */}
//       {['top-left', 'top-right', 'bottom-left', 'bottom-right'].map((corner, i) => (
//         <motion.div
//           key={corner}
//           className="absolute w-32 h-32 border border-white/5"
//           style={{
//             [corner.includes('top') ? 'top' : 'bottom']: 20,
//             [corner.includes('left') ? 'left' : 'right']: 20,
//             borderRadius: corner.includes('top') ? '0 0 50% 0' : '50% 0 0 0',
//             borderTop: corner.includes('top') ? 'none' : '1px solid rgba(255,255,255,0.05)',
//             borderBottom: corner.includes('bottom') ? 'none' : '1px solid rgba(255,255,255,0.05)',
//             borderLeft: corner.includes('left') ? 'none' : '1px solid rgba(255,255,255,0.05)',
//             borderRight: corner.includes('right') ? 'none' : '1px solid rgba(255,255,255,0.05)',
//           }}
//           animate={{
//             scale: [1, 1.2, 1],
//             opacity: [0.3, 0.8, 0.3],
//           }}
//           transition={{
//             duration: 3 + i,
//             repeat: Infinity,
//             delay: i * 0.5,
//           }}
//         />
//       ))}
//     </section>
//   );
// };




















// components/home/HomeSection.tsx
'use client';

import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import { Circle, Square, Triangle } from 'lucide-react';

type Particle = {
  x: number;
  y: number;
  duration: number;
  delay: number;
  size: number;
  rotation: number;
  color: string;
};

type FloatingShape = {
  x: number;
  y: number;
  duration: number;
  delay: number;
  size: number;
  rotation: number;
  type: 'circle' | 'square' | 'triangle';
  color: string;
};

const texts = [
  'Senior Full-Stack Developer',
  'Front-End Developer',
  'Back-End Developer',
  'React.js Specialist',
  'Next.js Expert',
  'Tailwind CSS Advocate',
  'Framer Motion Animator',
  'TypeScript Enthusiast',
  'mern Stack Developer',
  'next.js Developer',
  'application Developer',
  'flutter Developer',
  'node.js Developer',
  'Rest API Developer',
  'UI/UX Design Enthusiast',
  'Problem Solver',
  'Creative Technologist',
] as const;

const createInitialParticles = (width: number, height: number): Particle[] =>
  Array.from({ length: Math.min(50, Math.max(30, Math.floor(width / 40))) }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    duration: 5 + Math.random() * 15,
    delay: Math.random() * 5,
    size: 2 + Math.random() * 4,
    rotation: Math.random() * 360,
    color: `hsla(${200 + Math.random() * 60}, 100%, 70%, ${0.1 + Math.random() * 0.3})`,
  }));

const createInitialShapes = (width: number, height: number): FloatingShape[] => {
  const shapeTypes: FloatingShape['type'][] = ['circle', 'square', 'triangle'];

  return Array.from({ length: 10 }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    duration: 10 + Math.random() * 20,
    delay: Math.random() * 5,
    size: 30 + Math.random() * 50,
    rotation: Math.random() * 360,
    type: shapeTypes[Math.floor(Math.random() * shapeTypes.length)],
    color: `hsla(${Math.random() * 360}, 80%, 60%, ${0.03 + Math.random() * 0.07})`,
  }));
};

export const HomeSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState<Particle[]>(() => {
    if (typeof window === 'undefined') {
      return [];
    }

    return createInitialParticles(window.innerWidth, window.innerHeight);
  });
  const [shapes, setShapes] = useState<FloatingShape[]>(() => {
    if (typeof window === 'undefined') {
      return [];
    }

    return createInitialShapes(window.innerWidth, window.innerHeight);
  });
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);
  const [textIndex, setTextIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse tracking with spring for smooth following
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springMouseX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springMouseY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  // 3D tilt effect
  const rotateX = useTransform(springMouseY, [-500, 500], [15, -15]);
  const rotateY = useTransform(springMouseX, [-500, 500], [-15, 15]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      mouseX.set(clientX - window.innerWidth / 2);
      mouseY.set(clientY - window.innerHeight / 2);

      setMousePosition({ x: clientX, y: clientY });
    };

    const textInterval = window.setInterval(() => {
      setTextIndex((prev) => (prev + 1) % texts.length);
    }, 3000);

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.clearInterval(textInterval);
    };
  }, [mouseX, mouseY]);

  // Animated gradient positions
  const gradientX = useTransform(springMouseX, [-500, 500], [0, 100]);
  const gradientY = useTransform(springMouseY, [-500, 500], [0, 100]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[90vh] flex items-center justify-center px-4 overflow-hidden"
    >
      {/* Animated gradient background with mouse tracking */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/30 to-slate-900"
        style={{
          backgroundPosition: `${gradientX}% ${gradientY}%`,
        }}
        transition={{ type: "spring", damping: 30 }}
      />

      {/* Multiple animated gradient blobs */}
      {['purple', 'pink', 'blue', 'cyan', 'indigo'].map((color, index) => (
        <motion.div
          key={color}
          className={`absolute rounded-full filter blur-3xl opacity-20`}
          style={{
            width: 400 + index * 100,
            height: 400 + index * 100,
            background: `radial-gradient(circle, ${color}-500, transparent)`,
          }}
          animate={{
            x: [
              mousePosition.x - 250 + index * 60,
              mousePosition.x + 250 - index * 60,
              mousePosition.x - 250 + index * 60,
            ],
            y: [
              mousePosition.y - 250 + index * 60,
              mousePosition.y + 250 - index * 60,
              mousePosition.y - 250 + index * 60,
            ],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 8 + index * 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Floating geometric shapes */}
      {shapes.map((shape, i) => {
        const IconComponent = shape.type === 'circle' ? Circle : shape.type === 'square' ? Square : Triangle;
        return (
          <motion.div
            key={`shape-${i}`}
            className="absolute"
            style={{
              x: shape.x,
              y: shape.y,
              rotate: shape.rotation,
            }}
            animate={{
              x: [
                shape.x,
                shape.x + (i % 2 === 0 ? 250 : -250),
                shape.x + (i % 3 === 0 ? -200 : 200),
                shape.x,
              ],
              y: [
                shape.y,
                shape.y + (i % 2 === 0 ? -200 : 200),
                shape.y + (i % 3 === 0 ? 250 : -250),
                shape.y,
              ],
              rotate: [shape.rotation, shape.rotation + 360, shape.rotation],
              scale: [1, 1.2, 0.8, 1],
            }}
            transition={{
              duration: shape.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: shape.delay,
            }}
          >
            <IconComponent 
              className="text-white/5"
              size={shape.size}
              strokeWidth={0.5}
            />
          </motion.div>
        );
      })}

      {/* Advanced particle system */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: particle.size,
              height: particle.size,
              background: particle.color,
              boxShadow: `0 0 ${particle.size * 3}px ${particle.color}`,
            }}
            initial={{ x: particle.x, y: particle.y, rotate: particle.rotation }}
            animate={{
              x: [
                particle.x,
                particle.x + (i % 3 === 0 ? 250 : -250),
                particle.x + (i % 2 === 0 ? -200 : 200),
                particle.x,
              ],
              y: [
                particle.y,
                particle.y + (i % 2 === 0 ? -200 : 200),
                particle.y + (i % 3 === 0 ? 250 : -250),
                particle.y,
              ],
              scale: [1, 1.8, 0.5, 1],
              rotate: [particle.rotation, particle.rotation + 720, particle.rotation],
              opacity: [0.2, 0.9, 0.2],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: particle.delay,
            }}
          />
        ))}
      </div>

      {/* Animated decorative rings */}
      <motion.div
        className="absolute w-[700px] h-[700px] rounded-full border border-white/5"
        animate={{
          rotate: 360,
          scale: [1, 1.05, 1],
        }}
        transition={{
          rotate: { duration: 40, repeat: Infinity, ease: "linear" },
          scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
        }}
      >
        {[0, 90, 180, 270].map((degree, index) => (
          <motion.div
            key={index}
            className="absolute w-4 h-4 rounded-full"
            style={{
              top: '50%',
              left: '50%',
              marginTop: -8,
              marginLeft: -8,
              transform: `rotate(${degree}deg) translateY(-350px)`,
              background: `hsl(${200 + index * 60}, 100%, 60%)`,
              boxShadow: `0 0 30px hsl(${200 + index * 60}, 100%, 60%)`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              delay: index * 0.5,
              repeat: Infinity,
            }}
          />
        ))}
      </motion.div>

      {/* Main content with 3D tilt */}
      <motion.div
        className="relative z-10 text-center max-w-5xl"
        style={{
          rotateX,
          rotateY,
          perspective: 1000,
        }}
        transition={{ type: "spring", damping: 20 }}
      >
        {/* Animated profile badge */}
        <motion.div
          className="flex justify-center mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <motion.div
            className="relative"
            whileHover={{ scale: 1.05 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-fuchsia-500 rounded-full blur-xl opacity-50" />
            <div className="relative px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <span className="flex items-center gap-2 text-sm text-white">
                <span className="block h-4 w-4 rounded-full border border-cyan-400/70" />
                Available for Freelance
                <motion.span
                  className="w-2 h-2 bg-green-400 rounded-full inline-block"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              </span>
            </div>
          </motion.div>
        </motion.div>

        {/* Name with animated gradient */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
          >
            <span className="block">Kapil Kumar Mahato</span>
            <motion.span
              className="block bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-blue-400 bg-clip-text text-transparent text-3xl md:text-4xl lg:text-5xl mt-2"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                backgroundSize: '200% 200%',
              }}
            >
              Software Developer
            </motion.span>
          </motion.h1>
        </motion.div>

        {/* Rotating role text */}
        <motion.div
          className="h-12 mb-6 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <AnimatePresence mode="wait">
            <motion.p
              key={textIndex}
              className="text-xl md:text-2xl text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text font-semibold"
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -40, opacity: 0 }}
              transition={{ duration: 0.5, type: "spring" }}
            >
              {texts[textIndex]}
            </motion.p>
          </AnimatePresence>
        </motion.div>

        {/* Description with typed effect */}
        <motion.p
          className="text-base md:text-lg lg:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Crafting exceptional digital experiences with modern web technologies. 
          Specializing in high-performance applications, stunning animations, 
          and pixel-perfect designs that users love.
        </motion.p>

        {/* Call to action buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <motion.button
            className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-fuchsia-500 rounded-full font-semibold text-white shadow-lg shadow-cyan-500/30 overflow-hidden min-w-[180px]"
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 0 50px rgba(34,211,238,0.4)',
            }}
            whileTap={{ scale: 0.95 }}
            onHoverStart={() => setHoveredButton('primary')}
            onHoverEnd={() => setHoveredButton(null)}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-fuchsia-400"
              initial={{ x: '-100%' }}
              animate={{ x: hoveredButton === 'primary' ? '100%' : '-100%' }}
              transition={{ duration: 0.5 }}
            />
            <span className="relative flex items-center justify-center gap-2">
              <span className="block h-5 w-5 rounded-full border border-white/70" />
              View My Work
              <motion.span
                animate={{ x: hoveredButton === 'primary' ? 8 : 0 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <span className="block h-5 w-5 rounded-full border border-white/70" />
              </motion.span>
            </span>
          </motion.button>

          <motion.a
            href="#contact"
            className="group relative px-8 py-4 bg-white/10 backdrop-blur-sm rounded-full font-semibold text-white border border-white/20 min-w-[180px] text-center hover:bg-white/20 transition-all"
            whileHover={{ 
              scale: 1.05,
              borderColor: 'rgba(255,255,255,0.4)',
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="flex items-center justify-center gap-2">
              <span className="block h-5 w-5 rounded-full border border-white/70" />
              Contact Me
              <motion.span
                animate={{ 
                  rotate: hoveredButton === 'secondary' ? 360 : 0,
                }}
                transition={{ duration: 0.5 }}
              >
                <span className="block h-4 w-4 rounded-full bg-cyan-400/70" />
              </motion.span>
            </span>
          </motion.a>
        </motion.div>

        {/* Social links with floating animation */}
        <motion.div
          className="flex justify-center gap-6 mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          {[
            { label: 'GH', href: 'https://github.com' },
            { label: 'LI', href: 'https://linkedin.com' },
            { label: 'X', href: 'https://twitter.com' },
          ].map(({ label, href }, index) => (
            <motion.a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-sm font-semibold text-slate-300 transition-all hover:border-cyan-400/30 hover:text-white"
              whileHover={{
                scale: 1.2,
                backgroundColor: 'rgba(255,255,255,0.1)',
                y: -5,
              }}
              whileTap={{ scale: 0.9 }}
              animate={{
                y: [0, -5, 0],
              }}
              transition={{
                y: { duration: 2, delay: index * 0.3, repeat: Infinity, ease: 'easeInOut' },
              }}
            >
              {label}
            </motion.a>
          ))}
        </motion.div>

        {/* Animated scroll indicator */}
        <motion.div
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
          animate={{ 
            y: [0, 12, 0],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <motion.div
            className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1.5"
            animate={{
              borderColor: ['rgba(255,255,255,0.2)', 'rgba(34,211,238,0.8)', 'rgba(255,255,255,0.2)'],
            }}
            transition={{ duration: 2.5, repeat: Infinity }}
          >
            <motion.div
              className="w-1.5 h-3 bg-gradient-to-b from-cyan-400 to-fuchsia-400 rounded-full"
              animate={{
                y: [0, 18, 0],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
          <p className="text-xs text-slate-400 mt-2">Scroll to explore</p>
        </motion.div>
      </motion.div>

      {/* Corner decorations */}
      {['top-left', 'top-right', 'bottom-left', 'bottom-right'].map((corner, i) => (
        <motion.div
          key={corner}
          className="absolute w-40 h-40 border border-white/5"
          style={{
            [corner.includes('top') ? 'top' : 'bottom']: 30,
            [corner.includes('left') ? 'left' : 'right']: 30,
            borderRadius: corner.includes('top') ? '0 0 50% 0' : '50% 0 0 0',
            borderTop: corner.includes('top') ? 'none' : '1px solid rgba(255,255,255,0.05)',
            borderBottom: corner.includes('bottom') ? 'none' : '1px solid rgba(255,255,255,0.05)',
            borderLeft: corner.includes('left') ? 'none' : '1px solid rgba(255,255,255,0.05)',
            borderRight: corner.includes('right') ? 'none' : '1px solid rgba(255,255,255,0.05)',
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            delay: i * 0.5,
          }}
        />
      ))}
    </section>
  );
};