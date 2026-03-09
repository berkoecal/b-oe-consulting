"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, User, Mail, MessageSquare } from "lucide-react";
import { useTranslation } from "@/i18n/TranslationProvider";

export default function ContactForm() {
  const { dict } = useTranslation();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Message sent successfully!");
    }, 1500);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      className="glass-panel w-full max-w-xl p-8 md:p-12 rounded-3xl relative overflow-hidden"
      style={{
        boxShadow: "0 8px 48px 0 rgba(0,0,0,0.35), 0 1px 0 rgba(212,175,55,0.12) inset",
      }}
    >
      {/* Top gloss line — matches site's glass-panel style */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary-400/30 to-transparent" />
      <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none rounded-3xl" />

      <div className="relative z-10">
        <h2 className="text-3xl md:text-5xl font-serif text-foreground mb-2 leading-tight">
          {dict.contactPage.heading1} <br />
          <span className="text-gradient italic">{dict.contactPage.heading2}</span>
        </h2>
        <p className="text-foreground/50 mb-10 text-sm md:text-base leading-relaxed">
          {dict.contactPage.description}
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name */}
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-foreground/40 font-semibold ml-1">
                {dict.contactPage.form.nameLabel}
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-foreground/30 group-focus-within:text-primary-400 transition-colors" />
                </div>
                <input
                  type="text"
                  required
                  placeholder={dict.contactPage.form.namePlaceholder}
                  className="w-full pl-12 pr-4 py-4 rounded-2xl text-foreground placeholder-foreground/30 focus:outline-none transition-all duration-300 bg-foreground/[0.05] border border-primary-500/15 focus:border-primary-400/50 focus:bg-foreground/[0.08]"
                />
              </div>
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-foreground/40 font-semibold ml-1">
                {dict.contactPage.form.emailLabel}
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-foreground/30 group-focus-within:text-primary-400 transition-colors" />
                </div>
                <input
                  type="email"
                  required
                  placeholder={dict.contactPage.form.emailPlaceholder}
                  className="w-full pl-12 pr-4 py-4 rounded-2xl text-foreground placeholder-foreground/30 focus:outline-none transition-all duration-300 bg-foreground/[0.05] border border-primary-500/15 focus:border-primary-400/50 focus:bg-foreground/[0.08]"
                />
              </div>
            </div>
          </div>

          {/* Message */}
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-widest text-foreground/40 font-semibold ml-1">
              {dict.contactPage.form.messageLabel}
            </label>
            <div className="relative group">
              <div className="absolute top-5 left-4 pointer-events-none">
                <MessageSquare className="h-5 w-5 text-foreground/30 group-focus-within:text-primary-400 transition-colors" />
              </div>
              <textarea
                required
                rows={4}
                placeholder={dict.contactPage.form.messagePlaceholder}
                className="w-full pl-12 pr-4 py-5 rounded-2xl text-foreground placeholder-foreground/30 focus:outline-none transition-all duration-300 resize-none bg-foreground/[0.05] border border-primary-500/15 focus:border-primary-400/50 focus:bg-foreground/[0.08]"
              />
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            disabled={isSubmitting}
            type="submit"
            className="w-full py-5 mt-4 rounded-2xl font-medium tracking-widest uppercase text-sm flex items-center justify-center gap-3 transition-all disabled:opacity-70 text-dark-900"
            style={{
              background: "linear-gradient(135deg, #d4af37 0%, #f3e5ab 50%, #b8860b 100%)",
              boxShadow: "0 0 30px rgba(212,175,55,0.30), 0 1px 0 rgba(255,240,160,0.25) inset",
              border: "1px solid rgba(212,175,55,0.35)",
              color: "#2e3440",
            }}
          >
            {isSubmitting ? (
              <span className="animate-pulse">{dict.contactPage.form.submittingText}</span>
            ) : (
              <>
                <span>{dict.contactPage.form.submitButton}</span>
                <Send className="w-5 h-5 ml-1" />
              </>
            )}
          </motion.button>
        </form>
      </div>
    </motion.div>
  );
}
