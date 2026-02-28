import HeroSection from "@/components/HeroSection";
import BrandList from "@/components/BrandList";
import AboutMeSection from "@/components/AboutMeSection";
import ServicesSection from "@/components/ServicesSection";
import ExperienceSection from "@/components/ExperienceSection";
import CtaSection from "@/components/CtaSection";

export default function Home() {
  return (
    <main className="min-h-screen text-foreground overflow-x-hidden">
      <HeroSection />
      <BrandList />
      <AboutMeSection />
      <ServicesSection />
      <ExperienceSection />
      <CtaSection />
    </main>
  );
}
