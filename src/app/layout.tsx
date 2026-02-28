import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import DataMeshBackground from "@/components/DataMeshBackground";

const inter = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Berko | Executive Data & AI Consultant",
  description: "Expert consulting services in Data Mesh, Data & Analytics, and Artificial Intelligence. Delivering scalable solutions for enterprise organizations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-background text-foreground selection:bg-primary-500/30 relative`} >
        <DataMeshBackground />
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
