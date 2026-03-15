"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useTranslation } from "@/i18n/TranslationProvider";
import { useState } from "react";
import { X } from "lucide-react";

export default function ExperienceMatrix() {
  const { dict } = useTranslation();
  const m = dict.matrix;

  const [hoveredRow, setHoveredRow] = useState<string | null>(null);
  const [hoveredCol, setHoveredCol] = useState<string | null>(null);
  const [selectedCell, setSelectedCell] = useState<{ tech: string; ind: string } | null>(null);

  const technologies = [
    { id: "strategy", label: m.capabilities.strategy },
    { id: "platforms", label: m.capabilities.platforms },
    { id: "analytics", label: m.capabilities.analytics },
    { id: "enterprise", label: m.capabilities.enterprise },
  ];

  const industries = [
    { id: "automotive", label: m.industries.automotive },
    { id: "retail", label: m.industries.retail },
    { id: "finance", label: m.industries.finance },
    { id: "telecom", label: m.industries.telecom },
  ];

  const matrixData: Record<string, Record<string, { name: string; logo: string }[]>> = {
    strategy: {
      automotive: [
        { name: "BMW", logo: "BMW.svg" },
      ],
      retail: [
        { name: "Lidl", logo: "Lidl.svg" },
        { name: "REWE", logo: "REWE.svg" },
      ],
      finance: [
        { name: "PostFinance", logo: "PostFinance.svg" },
      ],
      telecom: [],
    },
    platforms: {
      automotive: [
        { name: "Volkswagen", logo: "VW.svg" },
      ],
      retail: [
        { name: "REWE", logo: "REWE.svg" },
      ],
      finance: [
        { name: "VKB", logo: "VKB.svg" },
      ],
      telecom: [
        { name: "Swisscom", logo: "Swisscom.svg" },
      ],
    },
    analytics: {
      automotive: [
        { name: "Mercedes-Benz", logo: "Mercedes-Benz.svg" },
        { name: "Volkswagen", logo: "VW.svg" },
      ],
      retail: [
        { name: "Lidl", logo: "Lidl.svg" },
      ],
      finance: [
      ],
      telecom: [],
    },
    enterprise: {
      automotive: [
        { name: "BMW", logo: "BMW.svg" },
        { name: "Mercedes-Benz", logo: "Mercedes-Benz.svg" },
      ],
      retail: [
      ],
      finance: [
        { name: "PostFinance", logo: "PostFinance.svg" },
        { name: "VKB", logo: "VKB.svg" },
      ],
      telecom: [
        { name: "Swisscom", logo: "Swisscom.svg" }, 
      ],
    },
  };

  return (
    <section id="matrix" className="py-24 bg-transparent relative border-t border-white/5 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary-600/10 rounded-full blur-[100px] pointer-events-none -translate-y-1/2" />
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none -translate-y-1/2" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-sm font-bold tracking-widest text-primary-500 uppercase mb-4">
            {m.subtitle}
          </h2>
          <h3 className="font-serif text-4xl md:text-5xl font-normal leading-tight">
            {m.title1} <span className="italic text-gray-400">{m.title2}</span>
          </h3>
        </motion.div>

        {/* Matrix Wrapper - Scrollable on mobile */}
        <div className="overflow-x-auto pb-8 -mx-6 px-6 md:mx-0 md:px-0">
          <div className="min-w-[800px] md:min-w-full relative">
            
            {/* Header Row (Industries) */}
            <div className="flex mb-4">
              <div className="w-64 shrink-0 mr-4"></div> {/* Empty top-left cell */}
              <div className="flex-1 grid grid-cols-4 gap-4">
                {industries.map((ind) => (
                  <div 
                    key={ind.id}
                    className={`text-center py-4 px-2 rounded-sm border transition-all duration-300 ${
                      hoveredCol === ind.id 
                        ? 'border-primary-500/50 bg-primary-500/5 text-white' 
                        : 'border-white/5 bg-white/5 text-gray-400'
                    }`}
                  >
                    <span className="font-serif text-lg">{ind.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Matrix Body */}
            <div className="space-y-4">
              {technologies.map((tech) => (
                <div key={tech.id} className="flex group">
                  {/* Row Header (Technologies) */}
                  <div 
                    className={`w-64 shrink-0 flex items-center p-6 rounded-sm border transition-all duration-300 mr-4 ${
                      hoveredRow === tech.id 
                        ? 'border-primary-500/50 bg-primary-500/5 text-white' 
                        : 'border-white/5 bg-white/5 text-gray-400'
                    }`}
                  >
                    <span className="font-serif text-lg">{tech.label}</span>
                  </div>

                  {/* Row Cells */}
                  <div className="flex-1 grid grid-cols-4 gap-4">
                    {industries.map((ind) => {
                      const clients = matrixData[tech.id][ind.id];
                      const isHovered = hoveredRow === tech.id || hoveredCol === ind.id;
                      
                      return (
                        <div
                          key={`${tech.id}-${ind.id}`}
                          onClick={() => setSelectedCell({ tech: tech.id, ind: ind.id })}
                          onMouseEnter={() => {
                            setHoveredRow(tech.id);
                            setHoveredCol(ind.id);
                          }}
                          onMouseLeave={() => {
                            setHoveredRow(null);
                            setHoveredCol(null);
                          }}
                          className={`group/cell cursor-pointer
                            relative min-h-[120px] p-4 rounded-sm border transition-all duration-300 flex flex-wrap gap-4 items-center justify-center
                            ${clients.length > 0 ? 'bg-dark-900/40 backdrop-blur-sm hover:bg-dark-800/60' : 'bg-transparent hover:bg-white/[0.02]'}
                            ${isHovered ? 'border-primary-500/30' : 'border-white/5'}
                            hover:border-primary-500/50 hover:shadow-[0_0_30px_rgba(var(--color-primary-500),0.1)]
                          `}
                        >
                          {clients.map((client, idx) => (
                            <motion.div
                              initial={{ opacity: 0, scale: 0.9 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.3, delay: idx * 0.1 }}
                              key={client.name}
                              className="relative w-24 h-14 grayscale group-hover/cell:grayscale-0 opacity-60 group-hover/cell:opacity-100 transition-all duration-300"
                              title={client.name}
                            >
                              <Image
                                src={`/brands/${client.logo}`}
                                alt={`${client.name} logo`}
                                fill
                                className="object-contain"
                              />
                            </motion.div>
                          ))}
                          {clients.length === 0 && (
                            <div className="w-1.5 h-1.5 rounded-full bg-white/5" />
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedCell && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark-900/80 backdrop-blur-md"
            onClick={() => setSelectedCell(null)}
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
                onClick={() => setSelectedCell(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-10 p-2"
                aria-label={m.modalClose}
              >
                <X className="w-6 h-6" />
              </button>

              <div className="relative z-10">
                <span className="text-primary-400 text-sm font-bold tracking-widest uppercase mb-3 block">
                  {m.modalTitle}
                </span>

                <h3 className="text-2xl md:text-3xl font-serif text-white mb-6">
                  {technologies.find(t => t.id === selectedCell.tech)?.label}{" "}
                  <span className="text-gray-400 font-normal italic">× {industries.find(i => i.id === selectedCell.ind)?.label}</span>
                </h3>

                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                  {(m.details as any)?.[`${selectedCell.tech}_${selectedCell.ind}`]}
                </p>

                {matrixData[selectedCell.tech][selectedCell.ind]?.length > 0 && (
                  <div className="border-t border-white/10 pt-6">
                    <div className="flex flex-wrap gap-6 items-center">
                      {matrixData[selectedCell.tech][selectedCell.ind].map((client) => (
                        <div key={client.name} className="relative w-24 h-14" title={client.name}>
                          <Image
                            src={`/brands/${client.logo}`}
                            alt={`${client.name} logo`}
                            fill
                            className="object-contain"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
