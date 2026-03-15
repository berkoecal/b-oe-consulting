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

const BASE_URL = "https://www.helvata.ch";

const META = {
  de: {
    title: "Helvata Consulting | Data & AI Beratung Zürich",
    description:
      "Helvata Consulting – Ihr Partner für Data & AI Strategie, Cloud Data Platforms und digitale Transformation. Berk Öcal, Zürich.",
    titleTemplate: "%s | Helvata Consulting",
  },
  en: {
    title: "Helvata Consulting | Data & AI Advisory Zurich",
    description:
      "Helvata Consulting – your partner for Data & AI strategy, Cloud Data Platforms, and enterprise digital transformation. Berk Öcal, Zurich.",
    titleTemplate: "%s | Helvata Consulting",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const m = META[locale as keyof typeof META] ?? META.en;

  return {
    title: {
      default: m.title,
      template: m.titleTemplate,
    },
    description: m.description,
    metadataBase: new URL(BASE_URL),
    alternates: {
      canonical: `${BASE_URL}/${locale}`,
      languages: {
        "de-CH": `${BASE_URL}/de`,
        "en-US": `${BASE_URL}/en`,
      },
    },
    openGraph: {
      type: "website",
      locale: locale === "de" ? "de_CH" : "en_US",
      url: `${BASE_URL}/${locale}`,
      siteName: "Helvata Consulting",
      title: m.title,
      description: m.description,
      images: [
        {
          url: `${BASE_URL}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: "Helvata Consulting – Data & AI Advisory",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: m.title,
      description: m.description,
      images: [`${BASE_URL}/og-image.jpg`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true },
    },
    authors: [{ name: "Berk Öcal", url: BASE_URL }],
    creator: "Berk Öcal",
    keywords: [
      "Data Consulting Zürich",
      "AI Strategie",
      "Cloud Data Platform",
      "Snowflake",
      "Databricks",
      "Data Mesh",
      "Helvata Consulting",
      "Berk Öcal",
      "SAFe",
      "Enterprise Transformation",
    ],
  };
}

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
