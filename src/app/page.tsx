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

export default function Home() {
  return (
    <>
    <Navbar />
    <HeroSection />

    <AboutSection />
    <PortraitSection />
    <ImageSection />
    <ServicesSection />
    <SelectedWorkSection />
    <TestimonialsSection />
    <NewsSection />
    <Footer />
    </>
  );
}
