import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { PortraitSection } from "@/components/PortraitSection";
import { ImageSection } from "@/components/ImageSection";
import { ServicesSection } from "@/components/ServicesSection";
import { SelectedWorkSection } from "@/components/SelectedWorkSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { NewsSection } from "@/components/NewsSection";
import { Footer } from "@/components/Footer";
import { FooterSpacer } from "@/components/FooterSpacer";

export default function Home() {
  return (
    <>
      <Navbar />

      {/*
        z-index: 1 puts all content above the fixed footer (z-index: 0).
        Sections must have explicit backgrounds so the footer stays hidden
        until the FooterSpacer (transparent) scrolls into view at the bottom.
      */}
      <div className="relative" style={{ zIndex: 1 }}>
        <HeroSection />
        <AboutSection />
        <PortraitSection />
        <ImageSection />
        <ServicesSection />
        <SelectedWorkSection />
        <TestimonialsSection />
        <NewsSection />
        <FooterSpacer />
      </div>

      <Footer />
    </>
  );
}
