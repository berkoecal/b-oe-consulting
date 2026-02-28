"use client";

import { motion } from "framer-motion";

export default function ServicesSection() {
  const services = [
    {
      id: "01",
      title: "Data Mesh Architecture",
      description: "Designing decentralized, scalable data ecosystems. I empower your domains to take ownership of their data products, accelerating enterprise agility without centralized bottlenecks.",
    },
    {
      id: "02",
      title: "Artificial Intelligence",
      description: "Deploying generative AI and machine learning solutions that drive real business value. From automating complex workflows to building smart, predictive applications.",
    },
    {
      id: "03",
      title: "Data & Analytics Strategy",
      description: "Transforming raw data into strategic assets. I evaluate your data maturity and architect advanced analytics pipelines that meet industry-leading standards.",
    }
  ];

  return (
    <section className="py-24 bg-transparent relative border-t border-white/5">
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
                Core Competencies
              </h2>
              <h3 className="font-serif text-4xl md:text-5xl font-normal leading-tight mb-6">
                How I partner <br />
                <span className="italic text-gray-500">with you.</span>
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed max-w-md font-light mb-8">
                I do not offer cookie-cutter solutions. I deliver bespoke architectural strategies and technical implementation tailored to the unique scale of your enterprise.
              </p>
              <div className="h-[1px] w-full bg-gradient-to-r from-primary-500/50 to-transparent" />
            </motion.div>
          </div>

          <div className="lg:col-span-7 space-y-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative p-8 md:p-10 rounded-sm border border-white/5 hover:border-primary-500/30 transition-colors duration-500 bg-dark-900/50"
              >
                <div className="flex flex-col md:flex-row gap-6 md:gap-10">
                  <div className="text-5xl font-serif text-primary-500/20 group-hover:text-primary-500/40 transition-colors duration-500">
                    {service.id}
                  </div>
                  <div>
                    <h4 className="text-2xl font-serif text-white mb-4">
                      {service.title}
                    </h4>
                    <p className="text-gray-400 leading-relaxed font-light">
                      {service.description}
                    </p>
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
