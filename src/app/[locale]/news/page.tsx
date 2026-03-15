"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { useTranslation } from "@/i18n/TranslationProvider";
import { useParams } from "next/navigation";
import { articles } from "@/content/articles";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const CATEGORIES = ["Data Strategy", "Artificial Intelligence", "Cloud Platforms"];

const categoryColors: Record<string, string> = {
  "Data Strategy": "text-violet-400 bg-violet-400/10 border-violet-400/20",
  "Artificial Intelligence": "text-cyan-400 bg-cyan-400/10 border-cyan-400/20",
  "Cloud Platforms": "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("de-CH", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function NewsPage() {
  const { dict } = useTranslation();
  const params = useParams();
  const locale = (params?.locale as string) || "de";
  const n = dict.news;

  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filtered = activeCategory
    ? articles.filter((a) => a.category === activeCategory)
    : articles;

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
          className="mb-16"
        >
          <span className="inline-block text-sm font-bold tracking-widest text-primary-500 uppercase mb-4">
            {n.subtitle}
          </span>
          <h1 className="font-serif text-5xl md:text-7xl font-normal leading-tight mb-6">
            {n.title}
          </h1>
          <p className="text-xl text-gray-500 font-light max-w-2xl leading-relaxed">
            {n.intro}
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap gap-3 mb-12"
        >
          <button
            onClick={() => setActiveCategory(null)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 border ${
              !activeCategory
                ? "bg-primary-500/20 text-primary-400 border-primary-500/40"
                : "bg-white/[0.03] text-gray-400 border-white/10 hover:border-white/20 hover:text-gray-300"
            }`}
          >
            {n.filterAll}
          </button>
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat === activeCategory ? null : cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 border ${
                activeCategory === cat
                  ? categoryColors[cat]
                  : "bg-white/[0.03] text-gray-400 border-white/10 hover:border-white/20 hover:text-gray-300"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {filtered.map((article, i) => (
            <motion.article
              key={article.slug}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
              className="group relative"
            >
              <Link href={`/${locale}/news/${article.slug}`}>
                <div className="h-full rounded-xl border border-white/[0.07] bg-dark-800/40 hover:border-primary-500/30 hover:bg-dark-800/60 transition-all duration-500 p-8 flex flex-col overflow-hidden relative">
                  {/* Subtle hover glow */}
                  <div className="absolute top-0 right-0 w-40 h-40 bg-primary-500/5 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  {/* Category pill */}
                  <span className={`self-start inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wide border mb-5 ${categoryColors[article.category] || "text-gray-400 bg-white/5 border-white/10"}`}>
                    {article.category}
                  </span>

                  {/* Title */}
                  <h2 className="font-serif text-2xl text-white group-hover:text-primary-200 transition-colors duration-300 mb-3 leading-snug">
                    {article.title}
                  </h2>

                  {/* Subtitle */}
                  <p className="text-sm text-primary-400/70 font-medium mb-4 leading-relaxed">
                    {article.subtitle}
                  </p>

                  {/* Excerpt */}
                  <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-3 flex-1">
                    {article.excerpt}
                  </p>

                  {/* Footer: date + read time + CTA */}
                  <div className="flex items-center justify-between text-xs text-gray-600 pt-4 border-t border-white/[0.05]">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3 h-3" />
                        {formatDate(article.date)}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3 h-3" />
                        {article.readTime} {n.minRead}
                      </span>
                    </div>
                    <span className="flex items-center gap-1 text-primary-400 font-medium group-hover:gap-2 transition-all duration-300">
                      {n.readMore}
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </main>
  );
}
