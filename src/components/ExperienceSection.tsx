"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "@/i18n/TranslationProvider";
import { useState } from "react";
import { X } from "lucide-react";

export default function ExperienceSection() {
  const { dict } = useTranslation();
  const experiences = [
    {
      ...dict.experience.items[0],
      highlight: true
    },
    {
      ...dict.experience.items[1],
      highlight: false
    },
    {
      ...dict.experience.items[2],
      highlight: false
    }
  ];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [selectedExp, setSelectedExp] = useState<any | null>(null);

  return (
    <section id="experience" className="py-24 bg-dark-900/40 relative">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <h2 className="text-sm font-bold tracking-widest text-primary-500 uppercase mb-4">
            {dict.experience.subtitle}
          </h2>
          <h3 className="font-serif text-4xl md:text-5xl font-normal leading-tight">
            {dict.experience.title1} <span className="italic text-gray-400">{dict.experience.title2}</span>
          </h3>
        </motion.div>

        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-4 md:before:mx-auto before:-translate-x-px md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active`}
            >
              {/* Timeline dot */}
              <div className={`flex items-center justify-center w-8 h-8 rounded-full border-4 border-dark-900 bg-dark-800 ${
                  exp.highlight ? 'ring-2 ring-primary-500' : 'ring-1 ring-white/20'
                } absolute left-0 md:left-1/2 -translate-x-1/2 z-10`}
              >
                {exp.highlight && <div className="w-2 h-2 rounded-full bg-primary-500" />}
              </div>

              {/* Content Card */}
              <div className="w-[calc(100%-2rem)] md:w-[calc(50%-2.5rem)] ml-8 md:ml-0 md:group-even:pr-10 md:group-odd:pl-10">
                <div 
                  onClick={() => setSelectedExp(exp)}
                  className="glass-panel p-6 md:p-8 rounded-sm hover:-translate-y-1 hover:bg-white/[0.04] transition-all duration-500 relative overflow-hidden cursor-pointer"
                >
                  {exp.highlight && (
                     <div className="absolute top-0 right-0 w-32 h-32 bg-primary-600/10 rounded-full blur-[40px] pointer-events-none" />
                  )}
                  
                  <div className="mb-4">
                    <span className="text-primary-500 font-medium text-sm tracking-wider uppercase mb-2 block">
                      {exp.period}
                    </span>
                    <h4 className="text-2xl font-serif text-white mb-1">{exp.company}</h4>
                    <p className="text-gray-400 font-light text-lg">
                      {exp.role}
                    </p>
                  </div>
                  <p className="text-gray-500 leading-relaxed font-light">
                    {exp.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedExp && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark-900/80 backdrop-blur-md"
            onClick={() => setSelectedExp(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl bg-dark-800 border border-white/10 rounded-xl p-6 md:p-10 shadow-2xl overflow-hidden"
            >
              {/* Background Glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/10 rounded-full blur-[80px] pointer-events-none -translate-y-1/2 translate-x-1/2" />

              <button
                onClick={() => setSelectedExp(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-10 p-2"
                aria-label="Close modal"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="relative z-10">
                <span className="text-primary-400 text-sm font-bold tracking-widest uppercase mb-3 block">
                  {selectedExp.period}
                </span>

                <h3 className="text-2xl md:text-3xl font-serif text-white mb-2">
                  {selectedExp.company}
                </h3>
                
                <h4 className="text-lg text-gray-400 font-medium mb-6">
                  {selectedExp.role}
                </h4>

                <div className="text-gray-300 text-lg leading-relaxed space-y-4">
                  <p>{selectedExp.fullDescription || selectedExp.desc}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
