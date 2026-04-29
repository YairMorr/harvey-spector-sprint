import { Navbar } from "@/components/Navbar";
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
    <section className="relative h-screen overflow-hidden flex flex-col justify-between md:justify-start px-4 md:px-8 pb-6 md:pb-0 md:gap-[240px]">

      {/* Background images */}
      <div className="md:hidden absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url("/harvey-hero-mobile.jpg")' }} />
      <div className="hidden md:block absolute inset-0 bg-cover bg-top" style={{ backgroundImage: 'url("/harvey-hero.jpg")' }} />

      {/* Backdrop blur — fades in from transparent at top to full blur at bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[350px] backdrop-blur-[10px] pointer-events-none"
        style={{
          maskImage: "linear-gradient(to bottom, transparent, black 65%)",
          WebkitMaskImage: "linear-gradient(to bottom, transparent, black 65%)",
        }}
      />

      {/* Navbar */}
      <Navbar />

      {/* Hero text */}
      <div className="relative flex flex-col w-full">

        {/* Label */}
        <div className="flex justify-center md:justify-start md:px-[18px] md:-mb-[15px]">
          <span className="font-mono text-sm text-white uppercase leading-[1.1] mix-blend-overlay">
            [ Hello I&apos;m ]
          </span>
        </div>

        {/* Name */}
        <h1 className="text-white font-medium capitalize mix-blend-overlay text-center w-full md:-mb-[15px] leading-[0.8] md:leading-[1.1] text-[96px] md:text-[13.75vw] tracking-[-6.72px] md:tracking-[-0.96vw]">
          Harvey<br className="md:hidden" /><span className="hidden md:inline">&nbsp;&nbsp;&nbsp;</span>Specter
        </h1>

        {/* Description + CTA */}
        <div className="flex flex-col items-center md:items-end w-full mt-[17px]">
          <div className="flex flex-col gap-[17px] w-[293px] md:w-[294px]">
            <p className="text-[#1f1f1f] text-sm font-bold italic uppercase tracking-[-0.035em] leading-[1.1]">
              H.Studio is a <span className="font-normal">full-service</span> creative
              studio creating beautiful digital experiences and products. We are an{" "}
              <span className="font-normal">award winning</span> design and art group
              specializing in branding, web design and engineering.
            </p>
            <button className="self-start bg-black text-white text-sm font-medium tracking-[-0.04em] px-4 py-3 rounded-[24px] hover:bg-zinc-800 transition-colors">
              Let&apos;s talk
            </button>
          </div>
        </div>

      </div>
    </section>

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
