"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

// Use the exact filenames provided in public/brands
const brands = [
  { name: "BMW", path: "/brands/BMW.svg" },
  { name: "Mercedes-Benz", path: "/brands/Mercedes-Benz.svg" },
  { name: "Volkswagen", path: "/brands/VW.svg" },
  { name: "LIDL", path: "/brands/Lidl.svg" },
  { name: "REWE", path: "/brands/REWE.svg" },
  { name: "PostFinance", path: "/brands/PostFinance.svg" },
  { name: "Swisscom", path: "/brands/Swisscom.svg" },
  { name: "VKB", path: "/brands/VKB.svg" },
];

// Duplicate to allow seamless looping
const scrollingBrands = [...brands, ...brands];

export default function BrandList() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [contentWidth, setContentWidth] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      setContentWidth(containerRef.current.scrollWidth / 2);
    }
  }, []);

  return (
    <section className="py-12 border-y border-white/5 bg-dark-900/40 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-dark-900 to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-dark-900 to-transparent z-10 pointer-events-none" />

      <div className="container mx-auto px-6 mb-10 text-center text-sm font-bold tracking-widest text-primary-500/50 uppercase">
        Trusted Advisory For
      </div>

      <div className="relative flex whitespace-nowrap overflow-hidden">
        <motion.div
           ref={containerRef}
           className="flex items-center gap-24 md:gap-32 w-max px-16"
           animate={{
             x: contentWidth ? [-contentWidth, 0] : 0, 
           }}
           transition={{
             repeat: Infinity,
             ease: "linear",
             duration: 40,
           }}
        >
          {scrollingBrands.map((brand, i) => (
            <div 
              key={`${brand.name}-${i}`} 
              className="flex items-center justify-center relative w-32 h-16 md:w-40 md:h-20 grayscale brightness-75 opacity-60 hover:grayscale-0 hover:brightness-100 hover:opacity-100 transition-all duration-500 cursor-default"
              title={brand.name}
            >
              <Image 
                src={brand.path} 
                alt={`${brand.name} logo`} 
                fill 
                className="object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
