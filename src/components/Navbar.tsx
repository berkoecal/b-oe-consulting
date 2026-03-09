"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "@/i18n/TranslationProvider";
import { useParams } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { dict } = useTranslation();
  const params = useParams();
  const locale = (params?.locale as string) || "en";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: dict.navbar.about, href: `/${locale}/#about` },
    { name: dict.navbar.services, href: `/${locale}/#services` },
    { name: dict.navbar.experience, href: `/${locale}/#experience` },
    { name: dict.navbar.publications, href: `/${locale}/#publications` },
    { name: dict.navbar.portfolio, href: `/${locale}/#portfolio` },
    { name: dict.navbar.contact, href: `/${locale}/contact` },
  ];

  return (
    <>
      {/* Desktop & Mobile Header Overlay */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
          scrolled
            ? "py-4 bg-dark-900/70 backdrop-blur-lg border-primary-500/10 shadow-lg"
            : "py-6 bg-transparent border-transparent"
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <a
            href="#"
            className="flex items-center gap-2 group"
          >
            <Image 
              src="/logo.svg" 
              alt="Helvata Logo" 
              width={120} 
              height={40} 
              className="w-auto h-24 object-contain"
              priority
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex flex-1 justify-center">
            <div className={`flex items-center gap-8 px-8 py-3 rounded-full transition-all duration-300 ${scrolled ? '' : 'bg-dark-900/20 backdrop-blur-md border border-white/5'}`}>
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-300 uppercase tracking-widest relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary-500 group-hover:w-full transition-all duration-300" />
                </a>
              ))}
            </div>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-6">
             <LanguageSwitcher />
             <a
              href={`/${locale}/contact`}
              className="px-6 py-2 border border-primary-500/30 text-primary-400 text-sm tracking-wider uppercase font-medium hover:bg-primary-500 hover:text-white transition-all duration-300 rounded-sm"
            >
              {dict.navbar.engage}
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center gap-6">
            <LanguageSwitcher />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-white hover:text-primary-400 transition-colors z-50"
            >
              {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Full-Screen Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-dark-900/95 backdrop-blur-xl flex flex-col items-center justify-center"
          >
            <nav className="flex flex-col items-center gap-10">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="font-serif text-4xl text-white hover:text-primary-500 transition-colors duration-300"
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a
                href={`/${locale}/contact`}
                onClick={() => setIsOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mt-8 px-10 py-4 bg-primary-600 text-white font-medium uppercase tracking-widest text-sm rounded-sm"
              >
                {dict.navbar.engage}
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
