"use client";

import type { Metadata } from "next";
import { motion } from "framer-motion";
import Link from "next/link";
import { useTranslation } from "@/i18n/TranslationProvider";
import { useParams } from "next/navigation";
import { ArrowUpRight, Mic, BarChart3, Users, Plug, Brain, ShieldCheck, Database, Rocket, RefreshCw, TrendingUp } from "lucide-react";

const pillarIcons = [Brain, ShieldCheck, Database, Rocket, RefreshCw, TrendingUp];

export default function SolutionsPage() {
  const { dict } = useTranslation();
  const params = useParams();
  const locale = (params?.locale as string) || "en";
  const s = dict.solutions;

  const featureIcons = [Mic, Users, BarChart3, Plug, BarChart3];

  return (
    <main className="relative min-h-screen bg-background text-foreground pt-36 pb-24 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80rem] h-[40rem] bg-primary-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block text-sm font-bold tracking-widest text-primary-500 uppercase mb-4">
            {s.subtitle}
          </span>
          <h1 className="font-serif text-5xl md:text-7xl font-normal leading-tight mb-6">
            {s.title1}{" "}
            <span className="italic text-gray-400">{s.title2}</span>
          </h1>
          <p className="text-xl text-gray-500 font-light max-w-2xl mx-auto leading-relaxed">
            {s.intro}
          </p>
        </motion.div>

        {/* ── upscill.ai Card ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative rounded-2xl overflow-hidden mb-12 border border-white/10 bg-dark-800/60 backdrop-blur-sm"
        >
          {/* Teal left accent */}
          <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-cyan-400 via-blue-500 to-violet-600" />

          {/* Background waveform glow */}
          <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{ backgroundImage: "radial-gradient(ellipse 80% 60% at 80% 50%, #06b6d4, transparent)" }} />

          <div className="relative p-8 md:p-12 grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Text */}
            <div>
              <span className="inline-block px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mb-6">
                {s.upscill.tag}
              </span>
              <h2 className="font-serif text-4xl md:text-5xl text-white mb-2">{s.upscill.name}</h2>
              <p className="text-cyan-400 font-medium mb-6 tracking-wide">{s.upscill.tagline}</p>
              <p className="text-gray-400 leading-relaxed mb-8">{s.upscill.desc}</p>

              {/* Feature pills */}
              <div className="flex flex-wrap gap-2 mb-10">
                {s.upscill.features.map((f: string, i: number) => {
                  const Icon = featureIcons[i] || Mic;
                  return (
                    <span key={f} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-gray-300">
                      <Icon className="w-3 h-3 text-cyan-400" />
                      {f}
                    </span>
                  );
                })}
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://upscill.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-dark-900 font-semibold rounded-sm transition-all duration-300 text-sm"
                >
                  {s.upscill.cta}
                  <ArrowUpRight className="w-4 h-4" />
                </a>
                <a
                  href="https://upscill.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-white/10 hover:bg-white/5 text-gray-300 font-medium rounded-sm transition-all duration-300 text-sm"
                >
                  {s.upscill.ctaSecondary}
                </a>
              </div>
            </div>

            {/* Right: Visual — animated waveform */}
            <div className="hidden md:flex items-center justify-center">
              <div className="relative w-64 h-64">
                {/* Glow rings */}
                <div className="absolute inset-0 rounded-full border border-cyan-500/10 animate-ping" style={{ animationDuration: "3s" }} />
                <div className="absolute inset-4 rounded-full border border-cyan-500/20 animate-ping" style={{ animationDuration: "2.4s" }} />
                <div className="absolute inset-8 rounded-full border border-cyan-500/30 animate-ping" style={{ animationDuration: "1.8s" }} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center">
                    <Mic className="w-10 h-10 text-cyan-400" />
                  </div>
                </div>
                {/* Waveform bars */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-1 items-end">
                  {[4, 7, 12, 9, 16, 8, 13, 6, 10, 5].map((h, i) => (
                    <div
                      key={i}
                      className="w-1.5 bg-cyan-400/60 rounded-full"
                      style={{ height: `${h * 2}px`, animationDelay: `${i * 0.1}s` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── AI Excellence Framework Card ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="relative rounded-2xl overflow-hidden border border-white/10 bg-dark-800/60 backdrop-blur-sm"
        >
          {/* Gold left accent */}
          <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-primary-400 via-primary-500 to-primary-700" />

          {/* Subtle gold glow */}
          <div className="absolute inset-0 opacity-[0.05] pointer-events-none"
            style={{ backgroundImage: "radial-gradient(ellipse 70% 55% at 75% 50%, #d4af37, transparent)" }} />

          <div className="relative p-8 md:p-12">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase bg-primary-500/10 text-primary-400 border border-primary-500/20 mb-6">
              {s.framework.tag}
            </span>
            <div className="md:flex items-start justify-between gap-12 mb-10">
              <div className="md:max-w-xl">
                <h2 className="font-serif text-4xl md:text-5xl text-white mb-2">{s.framework.name}</h2>
                <p className="text-primary-400 font-medium mb-6 tracking-wide">{s.framework.tagline}</p>
                <p className="text-gray-400 leading-relaxed">{s.framework.desc}</p>
              </div>
              <div className="mt-8 md:mt-0 flex-shrink-0">
                <Link
                  href={`/${locale}/contact`}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-primary-600 hover:bg-primary-500 text-white font-semibold rounded-sm transition-all duration-300 text-sm whitespace-nowrap"
                >
                  {s.framework.cta}
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Framework pillars grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {s.framework.pillars.map((pillar: string, i: number) => {
                const Icon = pillarIcons[i] || Brain;
                return (
                  <div key={pillar} className="flex items-center gap-3 px-4 py-4 rounded-lg bg-white/[0.03] border border-white/[0.07] hover:border-primary-500/30 hover:bg-white/[0.05] transition-all duration-300 group">
                    <div className="w-8 h-8 rounded-md bg-primary-500/10 border border-primary-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary-500/20 transition-colors">
                      <Icon className="w-4 h-4 text-primary-400" />
                    </div>
                    <span className="text-sm font-medium text-gray-300">{pillar}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
