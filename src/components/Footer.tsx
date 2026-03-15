"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "@/i18n/TranslationProvider";
import { useParams } from "next/navigation";

export default function Footer() {
  const { dict } = useTranslation();
  const params = useParams();
  const locale = (params?.locale as string) || "en";

  return (
    <footer className="relative border-t border-white/10 bg-dark-900/80 backdrop-blur-lg overflow-hidden">
      {/* Subtle gold glow top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-px bg-gradient-to-r from-transparent via-primary-500/60 to-transparent" />

      {/* Faint grid lines */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)", backgroundSize: "80px 80px" }}
      />

      <div className="relative container mx-auto px-6 py-10">
        {/* Top row: logo + tagline | nav links */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
          {/* Logo + tagline */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <Image
              src="/logo.svg"
              alt="Helvata Logo"
              width={120}
              height={40}
              className="w-auto h-11 opacity-90 hover:opacity-100 transition-opacity"
            />
            <p className="text-xs text-gray-500 tracking-widest uppercase">
              Data & AI Consultancy · Zürich
            </p>
          </div>

          {/* Legal links */}
          <div className="flex items-center gap-6 text-sm text-gray-500">
            <Link href={`/${locale}/imprint`} className="hover:text-primary-400 transition-colors tracking-wide">
              {dict.footer.imprint}
            </Link>
            <span className="text-white/10">|</span>
            <Link href={`/${locale}/privacy`} className="hover:text-primary-400 transition-colors tracking-wide">
              {dict.footer.privacy}
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/5 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-600">
          <p>&copy; {new Date().getFullYear()} Helvata Consulting. {dict.footer.rights}</p>
          <p className="text-primary-400/80 text-xs tracking-widest uppercase font-semibold">Creating value from AI & Data.</p>
        </div>
      </div>

      {/* Bottom accent bar */}
      <div className="h-[3px] w-full bg-gradient-to-r from-transparent via-primary-600 to-transparent" />
    </footer>
  );
}
