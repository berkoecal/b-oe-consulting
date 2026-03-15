import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "../globals.css";
import DataMeshBackground from "@/components/DataMeshBackground";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getDictionary, Locale } from "@/i18n/getDictionary";
import { TranslationProvider } from "@/i18n/TranslationProvider";

const inter = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Berk Öcal | Executive Data & AI Consultant",
  description: "Expert consulting services in Data Mesh, Data & Analytics, and Artificial Intelligence. Delivering scalable solutions for enterprise organizations.",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale as Locale;
  const dict = await getDictionary(locale);

  return (
    <html lang={locale} className="dark scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-background text-foreground selection:bg-primary-500/30 relative`} >
        <TranslationProvider dictionary={dict} lang={locale}>
          <DataMeshBackground />
          <Navbar />
          <div className="relative z-10">
            {children}
          </div>
          <Footer />
        </TranslationProvider>
      </body>
    </html>
  );
}
