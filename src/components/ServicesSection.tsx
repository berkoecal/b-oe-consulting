"use client";

import { motion } from "framer-motion";
import { useTranslation } from "@/i18n/TranslationProvider";

export default function ServicesSection() {
  const { dict } = useTranslation();
  const s = dict.services;

  return (
    <section id="services" className="py-24 bg-transparent relative border-t border-white/5">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="sticky top-32"
            >
              <h2 className="text-sm font-bold tracking-widest text-primary-500 uppercase mb-4">
                {s.subtitle}
              </h2>
              <h3 className="font-serif text-4xl md:text-5xl font-normal leading-tight mb-6">
                {s.title1} <br />
                <span className="italic text-gray-500">{s.title2}</span>
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed max-w-md font-light mb-8">
                {s.description}
              </p>
              <div className="h-[1px] w-full bg-gradient-to-r from-primary-500/50 to-transparent" />
            </motion.div>
          </div>

          <div className="lg:col-span-7 space-y-8">
            {s.items.map((service: { id: string; title: string; desc: string }, index: number) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative p-6 md:p-10 rounded-sm border border-white/5 hover:border-primary-500/30 transition-colors duration-500 bg-dark-900/50"
              >
                <div className="flex flex-col md:flex-row gap-4 md:gap-10">
                  <div className="text-4xl md:text-5xl font-serif text-primary-500/20 group-hover:text-primary-500/40 transition-colors duration-500">
                    {service.id}
                  </div>
                  <div>
                    <h4 className="text-2xl font-serif text-white mb-4">{service.title}</h4>
                    <p className="text-gray-400 leading-relaxed font-light">{service.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
