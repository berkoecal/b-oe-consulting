"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin } from "lucide-react";
import { useTranslation } from "@/i18n/TranslationProvider";

export default function CtaSection() {
  const { dict } = useTranslation();
  return (
    <>
      <section id="contact" className="py-24 relative overflow-hidden bg-transparent">
        {/* Subtle glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-primary-600/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-sm font-bold tracking-widest text-primary-500 uppercase mb-6">
              {dict.cta.subtitle}
            </h2>
            <h3 className="font-serif text-4xl md:text-6xl font-normal leading-tight mb-8">
              {dict.cta.title1} <br />
              <span className="italic text-gray-400">{dict.cta.title2}</span>
            </h3>
            <p className="text-xl text-gray-500 mb-12 font-light leading-relaxed">
              {dict.cta.description}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="w-full sm:w-auto px-10 py-5 bg-primary-600 hover:bg-primary-500 text-white rounded-sm font-medium transition-all duration-300 flex items-center justify-center gap-3">
                <Mail className="w-4 h-4" />
                {dict.cta.button}
              </button>
              <button className="w-full sm:w-auto px-10 py-5 hover:bg-white/5 border border-white/10 text-foreground rounded-sm font-medium transition-all duration-300 flex items-center justify-center gap-3">
                <Linkedin className="w-4 h-4" />
                Connect on LinkedIn
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Modern Executive Footer */}
      <footer className="py-12 border-t border-white/5 bg-dark-900/40 border-b-4 border-b-primary-600">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="font-serif text-xl text-white italic mb-1">Berko</p>
            <p className="text-sm text-gray-500 font-light">
              {dict.about.role} &bull; Data & AI
            </p>
          </div>
          
          <p className="text-gray-600 text-sm font-light">
            &copy; {new Date().getFullYear()} Berko Consulting. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
