"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-40 pb-12 overflow-hidden bg-transparent">
      {/* Sophisticated Background accents */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary-600/10 via-background to-background opacity-60" />
        <div className="absolute bottom-0 left-0 w-full h-[500px] bg-gradient-to-t from-dark-900 to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-6 flex items-center gap-4"
          >
            <div className="h-[1px] w-12 bg-primary-500" />
            <span className="text-primary-400 font-semibold tracking-widest uppercase text-sm">
               Data & AI Consultancy
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl font-normal leading-tight mb-8"
          >
            Architecting <br className="hidden md:block" />
            <span className="italic text-gray-400">intelligent</span> <br className="hidden md:block" />
            enterprises.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl font-light leading-relaxed border-l border-white/10 pl-6"
          >
            I partner with industry leaders to design scalable Data Mesh architectures and deploy transformative AI solutions. Delivering million-franc exactitude for the world's most demanding brands.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center gap-6"
          >
            <button className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-gray-100 text-black rounded-sm font-medium transition-all duration-300 flex items-center justify-center gap-3 group">
              Discuss an Engagement
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="w-full sm:w-auto px-8 py-4 hover:bg-white/5 border border-white/10 text-foreground rounded-sm font-medium transition-all duration-300">
              Explore My Track Record
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
