"use client";

import { motion } from "framer-motion";
import { useTranslation } from "@/i18n/TranslationProvider";

export default function AboutMeSection() {
  const { dict } = useTranslation();
  const a = dict.about;

  return (
    <section id="about" className="py-24 bg-dark-900/40 border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary-600/5 via-transparent to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Image placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-full aspect-[4/5] rounded-lg overflow-hidden glass-panel group"
          >
            <div className="absolute inset-0 bg-dark-800 flex items-center justify-center">
              <span className="text-gray-500 font-serif italic text-lg opacity-50">
                [Professional Portrait]
              </span>
            </div>
            <div className="absolute inset-0 border border-primary-500/20 rounded-lg group-hover:border-primary-500/40 transition-colors duration-500" />
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-dark-900/80 to-transparent" />
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <h2 className="text-sm font-bold tracking-widest text-primary-500 uppercase mb-4">
              {a.subtitle}
            </h2>
            <h3 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal leading-tight mb-8">
              {a.title1} <br />
              <span className="italic text-gray-400">{a.title2}</span>
            </h3>

            <div className="space-y-6 text-lg text-gray-400 leading-relaxed font-light">
              <p dangerouslySetInnerHTML={{ __html: a.p1 }} />
              <p dangerouslySetInnerHTML={{ __html: a.p2 }} />
              <p dangerouslySetInnerHTML={{ __html: a.p3 }} />
            </div>

            <div className="mt-10 pt-10 border-t border-white/10">
              <p className="font-serif text-2xl text-white italic">Berko</p>
              <p className="text-sm text-primary-400 mt-1 uppercase tracking-wider">
                {a.role}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
